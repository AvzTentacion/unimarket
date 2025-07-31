import { useState, useEffect } from "react";
import axios from "axios";
const api = "https://localhost:7255/api"; // or your base URL

function CreateListing() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        condition: "",
        categoryId: "",
        subCategoryId: "",
        images: [],
        sellerId: 1, // Replace with actual user ID
    });

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        axios.get(`${api}/categories`)
            .then((res) => {
                if (res.data) setCategories(res.data);
                else setCategories([]);
            })
            .catch(() => setCategories([]));
    }, []);

    useEffect(() => {
        if (!form.categoryId) return setSubCategories([]);
        axios.get(`${api}/subcategories/by-category/${form.categoryId}`)
            .then((res) => {
                if (res.data) setSubCategories(res.data);
                else setSubCategories([]);
            })
            .catch(() => setSubCategories([]));
    }, [form.categoryId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleImageChange = (e) => {
        setForm((prev) => ({ ...prev, images: Array.from(e.target.files) }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.price || form.price <= 0) newErrors.price = "Enter a valid price.";
        if (!form.condition) newErrors.condition = "Select condition.";
        if (!form.categoryId) newErrors.categoryId = "Choose a category.";
        if (!form.subCategoryId) newErrors.subCategoryId = "Choose a subcategory.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        const data = new FormData();
        for (const key in form) {
            if (key === "images") {
                form.images.forEach(file => data.append("Images", file));
            } else {
                data.append(key, form[key]);
            }
        }

        try {
            await axios.post(`${api}/items/add`, data);
            setSuccess(true);
            setForm({
                name: "", description: "", price: "", condition: "",
                categoryId: "", subCategoryId: "", images: [], sellerId: 1
            });
            setErrors({});
        } catch {
            setSuccess(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">List a New Item</h2>

            {success && <p className="text-green-600 text-sm mb-4">🎉 Listing created successfully!</p>}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Item Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-pink-400 transition`}
                        placeholder="e.g. Bluetooth headphones"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        placeholder="Briefly describe the item"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (ZAR)</label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.price ? 'border-red-500' : 'border-gray-300'} focus:ring-pink-400 transition`}
                        placeholder="e.g. 450"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                {/* Condition */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                    <select
                        name="condition"
                        value={form.condition}
                        onChange={handleChange}
                        className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.condition ? 'border-red-500' : 'border-gray-300'} focus:ring-pink-400 transition`}
                    >
                        <option value="">Select condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                    {errors.condition && <p className="text-red-500 text-sm mt-1">{errors.condition}</p>}
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                        name="categoryId"
                        value={form.categoryId}
                        onChange={handleChange}
                        className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.categoryId ? 'border-red-500' : 'border-gray-300'} focus:ring-pink-400 transition`}
                    >
                        <option value="">Choose category</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {errors.categoryId && <p className="text-red-500 text-sm mt-1">{errors.categoryId}</p>}
                </div>

                {/* Subcategory */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
                    <select
                        name="subCategoryId"
                        value={form.subCategoryId}
                        onChange={handleChange}
                        className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.subCategoryId ? 'border-red-500' : 'border-gray-300'} focus:ring-pink-400 transition`}
                    >
                        <option value="">Choose subcategory</option>
                        {subCategories.map(sub => (
                            <option key={sub.id} value={sub.id}>{sub.name}</option>
                        ))}
                    </select>
                    {errors.subCategoryId && <p className="text-red-500 text-sm mt-1">{errors.subCategoryId}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg text-lg font-semibold transition"
                >
                    Post Listing
                </button>
            </form>
        </div>
    );
}

export default CreateListing;









// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import {useEffect, useState} from "react";
//
// export default function ListingForm() {
//     const token = localStorage.getItem("token");
//     const decoded = JSON.parse(atob(token.split('.')[1]));
//     const userId = decoded.sub; // or decoded["nameid"]
//     const [categories, setCategories] = useState([]);
//
//
//     useEffect(() => {
//         fetch('/api/listings/categories')
//             .then(res => res.json())
//             .then(data => setCategories(data));
//
//         fetch('/api/listings/conditions')
//             .then(res => res.json())
//             .then(data => setConditions(data));
//     }, []);
//     return (
//         <form>
//             <div className="space-y-10 font-[Montserrat]">
//                 <div className="border-b border-t border-gray-900/10 pb-12">
//                     <p className="mt-1 text-sm/6 text-gray-600">
//                         This information will be displayed publicly so be careful what you share.
//                     </p>
//
//                     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
//                         <div className="col-span-full">
//                             <label htmlFor="username" className="block text-xl/6 font-bold text-gray-900">
//                                 Title
//                             </label>
//                             <div className="mt-2">
//                                 <div className="flex items-center p-1  bg-white pl-3 outline-2 -outline-offset-1 outline-gray-600 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#ce1750]">
//                                     <input
//                                         id="username"
//                                         name="username"
//                                         type="text"
//                                         placeholder="Figget Spinner"
//                                         className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-md/6"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="col-span-full">
//                             <label htmlFor="about" className="block text-xl/6 font-bold text-gray-900">
//                                 Description
//                             </label>
//                             <div className="mt-2">
//                 <textarea
//                     id="about"
//                     name="about"
//                     rows={3}
//                     className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-2 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ce1750] sm:text-sm/6"
//                     defaultValue={''}
//                 />
//                             </div>
//                             <p className="mt-2 text-sm/6 text-gray-600">e.g Figget spinner, carbon fiber coating used twice.</p>
//                         </div>
//
//                         <div className="col-span-full">
//                             <label htmlFor="cover-photo" className="block text-xl/6 font-bold text-gray-900">
//                                 Upload images
//                             </label>
//                             <div className="mt-2 flex justify-center  border border-dashed border-gray-900/25 px-6 py-10">
//                                 <div className="text-center">
//                                     <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
//                                     <div className="mt-4 flex text-sm/6 text-gray-600">
//                                         <label
//                                             htmlFor="file-upload"
//                                             className="relative cursor-pointer  bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
//                                         >
//                                             <span>Upload a file</span>
//                                             <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                                         </label>
//                                         <p className="pl-1">or drag and drop</p>
//                                     </div>
//                                     <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="border-b border-gray-900/10 pb-12">
//                     {/*<h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>*/}
//                     {/*<p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>*/}
//
//                     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                         <div className="col-span-full">
//                             <label htmlFor="category" className="block text-xl/6 font-bold text-gray-900">
//                                 Category
//                             </label>
//                             <div className="mt-2 grid grid-cols-1">
//                                 <select
//                                     id="category"
//                                     name="category"
//                                     autoComplete="e.g Book"
//                                     className="col-start-1 row-start-1 w-full appearance-none bg-white py-3 pr-8 pl-3 text-base text-gray-900 outline-2 -outline-offset-1 outline-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ce1750] sm:text-md/6"
//                                 >
//                                     <option></option>
//                                     <option>Electronic</option>
//                                     <option>Book</option>
//                                     <option>Clothing</option>
//                                     <option>Gadget</option>
//                                 </select>
//                                 <ChevronDownIcon
//                                     aria-hidden="true"
//                                     className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                                 />
//                             </div>
//                         </div>
//
//                         <div className="col-span-full">
//                             <label htmlFor="brand" className="block text-xl/6 font-bold text-gray-900">
//                                 Brand
//                             </label>
//                             <div className="mt-2 grid grid-cols-1">
//                                 <select
//                                     id="brand"
//                                     name="brand"
//                                     autoComplete="e.g Book"
//                                     className="col-start-1 row-start-1 w-full appearance-none bg-white py-3 pr-8 pl-3 text-base text-gray-900 outline-2 -outline-offset-1 outline-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ce1750] sm:text-md/6"
//                                 >
//                                     <option></option>
//                                     <option>Nike</option>
//                                     <option>Adidas</option>
//                                     <option>Huawei</option>
//                                     <option>Mac</option>
//                                     <option>iPhone</option>
//                                 </select>
//                                 <ChevronDownIcon
//                                     aria-hidden="true"
//                                     className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                                 />
//                             </div>
//                         </div>
//
//                         <div className="col-span-full">
//                             <label htmlFor="condition" className="block text-xl/6 font-bold text-gray-900">
//                                 Condition
//                             </label>
//                             <div className="mt-2 grid grid-cols-1">
//                                 <select
//                                     id="condition"
//                                     name="condition"
//                                     autoComplete="e.g Book"
//                                     className="col-start-1 row-start-1 w-full appearance-none bg-white py-3 pr-8 pl-3 text-base text-gray-900 outline-2 -outline-offset-1 outline-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ce1750] sm:text-md/6"
//                                 >
//                                     <option value="">Select condition</option>
//                                     <option value="new">New</option>
//                                     <option value="like-new">Like New</option>
//                                     <option value="refurbished">Refurbished</option>
//                                     <option value="used-good">Used - Good</option>
//                                     <option value="used-fair">Used - Fair</option>
//                                 </select>
//                                 <ChevronDownIcon
//                                     aria-hidden="true"
//                                     className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                                 />
//                             </div>
//                         </div>
//
//                         <div className="sm:col-span-2 sm:col-start-1">
//                             <label htmlFor="price" className="block text-xl/6 font-bold text-gray-900">
//                                 Price
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     id="price"
//                                     name="price"
//                                     type="text"
//                                     className="block w-full bg-white px-3 py-3 text-base text-gray-900 outline-2 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ce1750] sm:text-md/6"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="border-b border-gray-900/10 pb-12">
//                     <h2 className="text-base/7 font-semibold text-gray-900">Notifications</h2>
//                     <p className="mt-1 text-sm/6 text-gray-600">
//                         We'll always let you know about important changes, but you pick what else you want to hear
//                         about.
//                     </p>
//
//                     <div className="mt-10 space-y-10">
//                         <fieldset>
//                             <legend className="text-sm/6 font-semibold text-gray-900">By email</legend>
//                             <div className="mt-6 space-y-6">
//                                 <div className="flex gap-3">
//                                     <div className="flex h-6 shrink-0 items-center">
//                                         <div className="group grid size-4 grid-cols-1">
//                                             <input
//                                                 defaultChecked
//                                                 id="comments"
//                                                 name="comments"
//                                                 type="checkbox"
//                                                 aria-describedby="comments-description"
//                                                 className="col-start-1 row-start-1 appearance-none  border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ce1750] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                             />
//                                             <svg
//                                                 fill="none"
//                                                 viewBox="0 0 14 14"
//                                                 className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                             >
//                                                 <path
//                                                     d="M3 8L6 11L11 3.5"
//                                                     strokeWidth={2}
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     className="opacity-0 group-has-checked:opacity-100"
//                                                 />
//                                                 <path
//                                                     d="M3 7H11"
//                                                     strokeWidth={2}
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     className="opacity-0 group-has-indeterminate:opacity-100"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div className="text-sm/6">
//                                         <label htmlFor="comments" className="font-medium text-gray-900">
//                                             Comments
//                                         </label>
//                                         <p id="comments-description" className="text-gray-500">
//                                             Get notified when someones posts a comment on a posting.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </fieldset>
//
//                         <fieldset>
//                             <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
//                             <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//                             <div className="mt-6 space-y-6">
//                                 <div className="flex items-center gap-x-3">
//                                     <input
//                                         defaultChecked
//                                         id="push-everything"
//                                         name="push-notifications"
//                                         type="radio"
//                                         className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ce1750] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
//                                     />
//                                     <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
//                                         Everything
//                                     </label>
//                                 </div>
//                             </div>
//                         </fieldset>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="mt-6 flex items-center justify-end gap-x-6">
//                 <button type="button" className="text-sm/6 font-semibold text-gray-900">
//                     Cancel
//                 </button>
//                 <button
//                     type="submit"
//                     className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ce1750]"
//                 >
//                     Save
//                 </button>
//             </div>
//         </form>
//     )
// }
