class ApplicationBuilder {
  
  id: number
  name: string

  constructor() {
    this.id = 1
    this.name = 'Application'
  }

  withId(id: number) {
    this.id = id
    return this
  }

  withName(name: string) {
    this.name = name
    return this
  }

  build() {
    return { ...this } 
  }
}