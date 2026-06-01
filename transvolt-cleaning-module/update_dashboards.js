const fs = require('fs');

// Update fines.html
let finesHtml = fs.readFileSync('src/fines.html', 'utf8');

const newFinesData = `finesData: [
        { id: 'F-101', date: '2026-05-25', ref: 'Bus #402', violation: 'Quick Transit Cleaning – Missed Deadline', amount: 'INR 165', status: 'Pending' },
        { id: 'F-102', date: '2026-05-24', ref: 'Bus #781', violation: 'Overnight Cleaning – Missed Deadline', amount: 'INR 500', status: 'Paid' },
        { id: 'F-103', date: '2026-05-23', ref: 'Depot Maint. Pit 1', violation: 'Cleaning Standard Non-Compliance', amount: 'INR 500', status: 'Pending' },
        { id: 'F-104', date: '2026-05-22', ref: 'Bus #112', violation: 'Passenger Cleaning Complaint', amount: 'INR 165', status: 'Pending' },
        { id: 'F-105', date: '2026-05-21', ref: 'Service Bay 2', violation: 'Unsatisfactory Cleaning Quality', amount: 'INR 165', status: 'Paid' },
        { id: 'F-106', date: '2026-05-20', ref: 'Washing Pit', violation: 'Missed Cleaning SCHEDULE', amount: 'INR 500', status: 'Paid' }
      ]`;

finesHtml = finesHtml.replace(/finesData:\s*\[[\s\S]*?\]/, newFinesData);

// Also replace the 'Bus' column header with 'Reference'
finesHtml = finesHtml.replace('<th class="px-4 py-4 font-bold text-gray-800 dark:text-white/90">Bus</th>', '<th class="px-4 py-4 font-bold text-gray-800 dark:text-white/90">Reference</th>');

fs.writeFileSync('src/fines.html', finesHtml);

// Update depot-cleaning.html
let depotHtml = fs.readFileSync('src/depot-cleaning.html', 'utf8');

const xDataStr = `{
      page: 'depot-cleaning',
      currentDay: 'Monday',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      getSchedule() {
        const d = this.currentDay;
        if (d === 'Sunday') {
          return [
            { area: 'Washing Pit', task: 'Full Wash & Clean', completed: false }
          ];
        }
        
        let maint = [
          { area: 'Maintenance Pit 1', task: (d === 'Monday') ? 'FULL WASH' : 'Broom & Dust', completed: false },
          { area: 'Maintenance Pit 2', task: (d === 'Wednesday') ? 'FULL WASH' : 'Broom & Dust', completed: false },
          { area: 'Maintenance Pit 3', task: (d === 'Friday') ? 'FULL WASH' : 'Broom & Dust', completed: false }
        ];

        let bays = [
          { area: 'Service Bay 1', task: (d === 'Monday' || d === 'Saturday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
          { area: 'Service Bay 2', task: (d === 'Tuesday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
          { area: 'Service Bay 3', task: (d === 'Wednesday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
          { area: 'Service Bay 4', task: (d === 'Thursday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
          { area: 'Service Bay 5', task: (d === 'Friday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false }
        ];

        return [
          { area: 'Washing Pit', task: 'Full Wash & Clean', completed: false },
          ...maint,
          ...bays,
          { area: 'Other Areas', task: 'Admin Building, Charging Bays, Washrooms, Depot Premises (Daily Clean)', completed: false }
        ];
      },
      loaded: true, 
      darkMode: false, 
      stickyMenu: false, 
      sidebarToggle: false, 
      scrollTop: false
    }`;

depotHtml = depotHtml.replace(/<body x-data="\{[\s\S]*?\}"/, `<body x-data="${xDataStr}"`);

const newMainDepot = `
      <main>
        <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <div class="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-title-md2 font-bold text-gray-800 dark:text-white/90">Depot Premises Cleaning</h2>
              <p class="text-base text-gray-500 dark:text-gray-400 mt-1">Daily schedule for Wash Pits, Maintenance Pits, Service Bays & Other Areas.</p>
            </div>
            
            <div class="relative z-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm w-48">
              <select x-model="currentDay" class="w-full bg-transparent py-3 pl-5 pr-12 outline-none appearance-none font-bold text-gray-800 dark:text-white cursor-pointer">
                <template x-for="day in days" :key="day">
                  <option :value="day" x-text="day"></option>
                </template>
              </select>
              <span class="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                <i class="ph ph-caret-down"></i>
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4">
            <template x-for="(item, index) in getSchedule()" :key="currentDay + index">
              <div @click="item.completed = !item.completed" class="cursor-pointer rounded-2xl border-2 p-5 transition-colors flex items-center justify-between gap-4"
                   :class="item.completed ? 'border-success-500 bg-success-50 dark:bg-success-500/10' : 'border-gray-200 bg-white hover:border-brand-500 dark:border-gray-800 dark:bg-gray-900'">
                
                <div class="flex items-center gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-2xl font-bold">
                    <i class="ph" :class="
                      item.area.includes('Washing') ? 'ph-drop text-blue-500' : 
                      item.area.includes('Maintenance') ? 'ph-wrench text-orange-500' : 
                      item.area.includes('Bay') ? 'ph-garage text-brand-500' : 
                      'ph-buildings text-purple-500'
                    "></i>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold" :class="item.completed ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-800 dark:text-white'"><span x-text="item.area"></span></h4>
                    <p class="text-sm mt-1 font-semibold" :class="
                        item.completed ? 'text-gray-400 dark:text-gray-600 line-through' : 
                        (item.task.includes('FULL WASH') || item.task.includes('FULL CLEAN') || item.task.includes('Full Wash')) ? 'text-brand-600 dark:text-brand-400' : 'text-gray-500 dark:text-gray-400'
                      "><span x-text="item.task"></span>
                    </p>
                  </div>
                </div>

                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors" 
                     :class="item.completed ? 'border-success-500 bg-success-500 text-white' : 'border-gray-300 text-transparent'">
                  <i class="ph ph-check font-bold" x-show="item.completed"></i>
                </div>

              </div>
            </template>
            
            <div x-show="getSchedule().length === 0" class="p-8 text-center bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
              <p class="text-gray-500">No scheduled tasks for this day.</p>
            </div>
          </div>
          
          <div class="mt-8">
            <button class="w-full rounded-xl py-4 font-bold text-white text-lg transition-all bg-brand-500 hover:bg-brand-600 shadow-md hover:shadow-lg">
              Submit Daily Report
            </button>
          </div>

        </div>
      </main>
`;

depotHtml = depotHtml.replace(/<main>[\s\S]*?<\/main>/, newMainDepot);
fs.writeFileSync('src/depot-cleaning.html', depotHtml);
