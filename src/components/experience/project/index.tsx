import { Button, Card } from 'antd';
import { FiArrowUpRight } from 'react-icons/all';
import '../styles.css';

export interface IProject {
  name: string;
  description: string;
  repository: string;
  image: string;
  techStack: string[];
}

interface ProjectProps {
  project: IProject;
}

function Project({ project }: ProjectProps) {
  return (
    <div className='project'>
      <Card
        className='h-100 position-relative'
        hoverable
        cover={
          <div className='project-img'>
            <img
              src={project.image}
              alt='image'
              width={'100%'}
              style={{ overflow: 'hidden' }}
            />
          </div>
        }
      >
        <h5>{project.name}</h5>
        <p className='pb-3'>{project.description}</p>
        <div className='position-absolute bottom-0 pb-3'>
          <a className='' href={project.repository}>
            VIEW ON GITHUB <FiArrowUpRight />
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Project;
