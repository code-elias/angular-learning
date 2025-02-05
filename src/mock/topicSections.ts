import { TopicSection } from '@/models/TopicSection'

export const MyTopicSections: { [id: number]: TopicSection[] } = {
  0: [
    new TopicSection('Install Angular', 'installAngular'),
    new TopicSection('Create Project', 'createProject'),
    new TopicSection('Run App', 'runApp')
  ]
}
