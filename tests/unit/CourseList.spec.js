import { shallowMount } from "@vue/test-utils";
import CourseList from "@/components/CourseList.vue";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseList.vue", () => {
  it("renders a list of CourseItem components", () => {
    const course = {
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 10,
    };
    const wrapper = shallowMount(CourseItem, {
      props: {
        course,
      },
    });

    const courseItems = wrapper.findAllComponents(CourseItem);

    courseItems.forEach((item, index) => {
      const course = course[index];
      expect(item.props("course")).toEqual(course);
    });
  });

    it("emits addCourse when CourseItem emits addCourse", async () => {
        const wrapper = shallowMount(CourseList);
      await wrapper.vm.addCourse(1);
      expect(wrapper.emitted("addCourse")[0]).toEqual([1]);
    });

    it("emits removeCourse when CourseItem emits removeCourse", async () => {
    const wrapper = shallowMount(CourseList);

    await wrapper.vm.removeCourse(1);
// console.log(wrapper.emitted("removeCourse"));
    //   expect(wrapper.emitted("removeCourse")).toBeTruthy();
      expect(wrapper.emitted("removeCourse")[0]).toEqual([1]);
        });
});
