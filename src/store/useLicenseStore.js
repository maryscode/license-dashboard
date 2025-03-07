import { create } from "zustand";

const useLicenseStore = create((set) => ({
    licenses: [],
    filterText: "", // track search query
    //setLicenses: (newLicenses) => set({ licenses: newLicenses }),
    fetchLicenses: async () => {
        try {
            const res = await fetch('/api/licenses');
            if (!res.ok) throw new Error('Failed to fetch licenses.');
            const licenseData = await res.json();
            set({licenses: licenseData});
        } catch (error){
            console.error(error);
        }
    },
    setFilterText: (text) => set({filterText: text }), // update filter value
    addLicense: (text) => {
        //console.log(useLicenseStore.getState().licenses); // getState() for debugging
        set((state) => ({ licenses: [...state.licenses, {
            id: Date.now(),
            name: text,
        }]}))
    },
}));

export default useLicenseStore;