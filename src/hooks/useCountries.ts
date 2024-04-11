import { useEffect, useState } from "react"
import c from "../data/data"

interface Countries {
    name: string
}

const useCountries = () => {
    const [countries, setCountries] = useState<Countries[]>()
    useEffect(() => {
        setCountries(c)
    },[])

    return { countries }
}

export default useCountries;