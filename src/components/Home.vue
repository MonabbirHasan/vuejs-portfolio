<template>
  <div>
    <banner />
  </div>
  <br>

  <div>
    <AboutVue />
  </div>

  <div>
    <SkillVue />
  </div>
  <div>
    <ServiceVue />
  </div>
  <div>
    <ProjectVue />
  </div>
  <div>
    <BlogVue />
  </div>
  <div>
    <ContactVue />
  </div>
</template>

<script>
import banner from './banner.vue';
import AboutVue from './About.vue';
import SkillVue from "./skills.vue";
import ServiceVue from "./service.vue"
import ProjectVue from "./project.vue"
import BlogVue from "./blog.vue"
import ContactVue from "./contact.vue"
export default {
  name: "Home-page",
  components: { banner, AboutVue, SkillVue, ServiceVue, ProjectVue, BlogVue, ContactVue },

}
</script>

<style>

</style>