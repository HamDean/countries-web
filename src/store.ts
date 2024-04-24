import {create} from 'zustand'

interface CountryStore {
    country: string | undefined,
    setCountry: (country: string) => void
}


const useStore = create<CountryStore>((set) => ({
    country: 'Ghana',  
    setCountry: (selected) => set({ country: selected }) 
  }));

  export default useStore;