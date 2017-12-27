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

interface IStepImg {
  img: string;
  context?: string;
}

interface IStepContent {
  name: string;
  description: string;
  context?: string;
}

interface ICourse {
  id: number;
  name: string;
  img: string;
  banner: string;
  description: string;
  href: string;
  duration: number;
  price: number;
  tags: string;
}
