export interface TeamMember {
  src: string;
  name: string;
  role: string;
}

export interface BlogPost {
  date: {
    day: number;
    month: string;
  };
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
}