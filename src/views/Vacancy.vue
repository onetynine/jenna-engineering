<script setup>
const jobs = [
  {
    title: 'Elevator Technician',
    location: 'Kuala Lumpur',
    type: 'Full Time',
    description:
      'Responsible for installation, maintenance, and troubleshooting of elevators and escalators.'
  },
  {
    title: 'Project Engineer',
    location: 'Selangor',
    type: 'Full Time',
    description:
      'Manage elevator projects, coordinate with contractors, and ensure timely delivery.'
  },
  {
    title: 'Sales Executive',
    location: 'Malaysia',
    type: 'Full Time',
    description:
      'Develop client relationships and propose elevator solutions for commercial projects.'
  }
]
</script>

<template>
  <section class="min-h-screen bg-slate-50 pt-32 pb-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900">
          Join Our Team
        </h1>
        <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Build your career with a growing Malaysian elevator & escalator company.
        </p>
      </div>

      <!-- Job Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition"
        >
          <h2 class="text-xl font-semibold text-slate-900">
            {{ job.title }}
          </h2>

          <div class="mt-2 text-sm text-slate-500">
            {{ job.location }} · {{ job.type }}
          </div>

          <p class="mt-4 text-slate-600">
            {{ job.description }}
          </p>

          <button
            class="mt-6 w-full py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
