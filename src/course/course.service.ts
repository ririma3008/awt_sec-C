
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): string {
    return 'All courses';
  }

  getCourseById(id: string): string {
    return `Course with ID ${id}`;
  }

  createCourse(): string {
    return 'Course created successfully';
  }

  updateCourse(id: string): string {
    return `Course with ID ${id} updated`;
  }

  patchCourse(id: string): string {
    return `Course with ID ${id} partially updated`;
  }

  deleteCourse(id: string): string {
    return `Course with ID ${id} deleted`;
  }
}
