declare interface Skill {
  imgUrl: string,
  text: string
}

declare interface Project {
  image: string,
  title: string,
  description: string,
  urls?: {
    live?: string,
    github: string
  }
}