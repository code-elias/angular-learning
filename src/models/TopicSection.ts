export class TopicSection {
  title: string
  section: string

  constructor(title: string, section: string) {
    this.title = title

    if (section[0] !== '#') {
      section = '#' + section
    }
    this.section = section
  }
}
