interface IKoaBodyOptions {
  multipart: boolean; 
  uploadDir: string;
}

interface IDepartamentCreate {
  name?: string;
  description?: string;
  image?: string;
}

interface IDepartamentCreateProps extends IDepartamentCreate {}
interface IDepartamentCreateState extends IDepartamentCreate {}

interface IStep {
  name: string;
  description: string;
  img: string;
  odd: boolean;
}
