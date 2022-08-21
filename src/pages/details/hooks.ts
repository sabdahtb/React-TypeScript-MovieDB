import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useCustom = () => {
  const [movieDetais, setMovieDetais] = useState<any>()

  const imageUri = process.env.IMAGE_URI
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then((res) => {
        setMovieDetais(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return {
    datas: {
      imageUri,
      movieDetais,
    },
  }
}
