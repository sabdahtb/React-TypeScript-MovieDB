import axios from 'axios'
import { useEffect, useState } from 'react'

export const useCustom = () => {
  const [listmovie, setListmovie] = useState<any[]>()
  const [moviesPage, setMoviesPage] = useState<number>(1)
  const imageUri = process.env.IMAGE_URI
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${moviesPage}`,
      )
      .then((res) => {
        setListmovie(res?.data?.results)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const nextPage = () => {
    setMoviesPage((prev) => prev + 1)
  }

  const prevPage = () => {
    setMoviesPage((prev) => (prev === 1 ? prev : prev - 1))
  }

  return {
    datas: {
      imageUri,
      listmovie,
      moviesPage,
    },
    methods: {
      nextPage,
      prevPage,
    },
  }
}
