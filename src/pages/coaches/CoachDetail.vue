<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out Now</h2>
        <base-button link :to='contactLink'>Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for='area in areas'
                  :key='area'
                  :title='area'
                  :type='area'
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from '@/components/ui/BaseBadge';

export default {
  name: 'CoachDetail',
  components: { BaseBadge, BaseButton, BaseCard },
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed:{
    fullName(){
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    contactLink(){
      return `${this.$route.path}/${this.id}/contact`;
    },
    rate(){
      return this.selectedCoach.hourlyRate;
    },
    areas(){
      return this.selectedCoach.areas;
    },
    description(){
      return this.selectedCoach.description;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
  }
};
</script>

<style scoped>

</style>