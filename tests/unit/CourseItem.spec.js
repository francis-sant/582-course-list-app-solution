import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {
  it("Is the props course working", () => {
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
    expect(wrapper.find("h2").text()).toBe(course.name);
  });

  it("when the button Add is selected the class is added", async () => {
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.vm.isAdded).toBe(false);
    await wrapper.find("[data-testid='sendAdd' ]").trigger("click");
    expect(wrapper.vm.isAdded).toBe(true);
  });

  it("Shows the button remove when is added", async () => {
    const buttonText = "Remove Course";
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.vm.isAdded).toBe(false);
    await wrapper.setData({ isAdded: true });
    expect(wrapper.find("button").text()).toBe(buttonText);
  });
});
