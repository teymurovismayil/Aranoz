import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"


function Add() {
    const { register, handleSubmit } = useForm()




const [image, setimage] = useState(null)

const convertoBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setimage(reader.result)
    }
}

const onSubmit = (data) => {
    // axios.post('http://localhost:3000/mehsullar', data)

    axios.post('http://localhost:3000/mehsullar', { ...data, image: image })
}



return (
    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 align-items-center mt-5'>
        <label>
            Ad :
            <input {...register("name")} />

        </label>
        <label>Qiymet:
            <input {...register("price")} />

        </label>

        <label>Image :
            <input type="file" onInput={(e) => convertoBase64(e.target.files[0])} />
        </label>

        <input className='btn btn-outline-danger' type="submit" />
    </form>
)
}

export default Add