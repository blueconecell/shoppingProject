import { create } from 'zustand';

interface ProductStore{
    title:string;
    content: string;
    productImageFileList: File[];
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
    setProductImageFileList: (productImageFileList: File[]) => void;
    resetProduct: () => void;
};

const useProductStore = create<ProductStore>(set => ({
    title: '',
    content: '',
    productImageFileList: [],
    setTitle: (title) => set(state => ({ ... state, title})),
    setContent: (content) => set(state => ({ ...state, content})),
    setProductImageFileList: (productImageFileList) => set(state => ({ ...state, productImageFileList})),
    resetProduct: () => set(state => ({ ...state, title: '', content: '', productImageFileList: [] })),
}));
export default useProductStore;