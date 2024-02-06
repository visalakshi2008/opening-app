import React from 'react'

const reportWebVitals = () => {
  return (

    <div class="max-w-screen-lg mx-auto">
      <table class="min-w-full bg-white border border-blue-500 rounded shadow-md">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b border-blue-500 bg-blue-500 text-white font-semibold">ID</th>
            <th class="py-2 px-4 border-b border-blue-500 bg-blue-500 text-white font-semibold">Name</th>
            <th class="py-2 px-4 border-b border-blue-500 bg-blue-500 text-white font-semibold">Tags</th>
            <th class="py-2 px-4 border-b border-blue-500 bg-blue-500 text-white font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b border-blue-500">1</td>
            <td class="py-2 px-4 border-b border-blue-500">John Doe</td>
            <td class="py-2 px-4 border-b border-blue-500">
              <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Tag 1</span>
              <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Tag 2</span>
            </td>
            <td class="py-2 px-4 border-b border-blue-500">
              <button class="text-blue-500 hover:underline">Edit</button>
              <button class="text-red-500 hover:underline ml-2">Delete</button>
            </td>
          </tr>
         >
        </tbody>
      </table>
    </div>

  )
}

export default reportWebVitals
