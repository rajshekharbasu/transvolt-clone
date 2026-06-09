const fs = require('fs');

let depotHtml = fs.readFileSync('src/depot-cleaning.html', 'utf8');

const xDataStr = `{
      page: 'depot-cleaning',
      currentDay: 'Monday',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      schedule: {},
      updateSchedule() {
        const d = this.currentDay;
        if (d === 'Sunday') {
           this.schedule = {
             'Washing Pits': [{ area: 'Washing Pit 1', task: 'Full Wash & Clean', completed: false }]
           };
           return;
        }
        
        this.schedule = {
          'Washing Pits': [
            { area: 'Washing Pit 1', task: 'Full Wash & Clean', completed: false }
          ],
          'Maintenance Pits': [
            { area: 'Pit 1', task: (d === 'Monday') ? 'FULL WASH' : 'Broom & Dust', completed: false },
            { area: 'Pit 2', task: (d === 'Wednesday') ? 'FULL WASH' : 'Broom & Dust', completed: false },
            { area: 'Pit 3', task: (d === 'Friday') ? 'FULL WASH' : 'Broom & Dust', completed: false }
          ],
          'Service Bays': [
            { area: 'Bay 1', task: (d === 'Monday' || d === 'Saturday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
            { area: 'Bay 2', task: (d === 'Tuesday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
            { area: 'Bay 3', task: (d === 'Wednesday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
            { area: 'Bay 4', task: (d === 'Thursday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false },
            { area: 'Bay 5', task: (d === 'Friday') ? 'FULL CLEAN' : 'Dust & Sweep', completed: false }
          ],
          'Other Areas': [
            { area: 'Admin Building', task: 'Daily Clean', completed: false },
            { area: 'Charging Bays', task: 'Daily Clean', completed: false },
            { area: 'Washrooms', task: 'Daily Clean', completed: false },
            { area: 'Depot Premises', task: 'Daily Clean', completed: false }
          ]
        };
      },
      init() {
        this.updateSchedule();
        this.$watch('currentDay', () => {
           this.updateSchedule();
        });
      },
      loaded: true, 
      darkMode: false, 
      stickyMenu: false, 
      sidebarToggle: false, 
      scrollTop: false
    }`;

depotHtml = depotHtml.replace(/<body x-data="\{[\s\S]*?\}"/, `<body x-data="${xDataStr}" x-init="init()"`);

const newMainDepot = `
      <main>
        <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          
          <div class="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900 shadow-sm">
            <div>
              <h2 class="text-title-md2 font-bold text-gray-800 dark:text-white/90">Depot Cleaning Schedule</h2>
              <p class="text-base text-gray-500 dark:text-gray-400 mt-1">Review and manage the segregated daily tasks for all premises.</p>
            </div>
            
            <div class="relative z-20 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-sm w-48 hover:border-brand-500 transition-colors">
              <select x-model="currentDay" class="w-full bg-transparent py-3 pl-5 pr-12 outline-none appearance-none font-bold text-brand-600 dark:text-brand-400 cursor-pointer text-lg">
                <template x-for="day in days" :key="day">
                  <option :value="day" x-text="day"></option>
                </template>
              </select>
              <span class="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-brand-500">
                <i class="ph ph-calendar-blank text-xl"></i>
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <template x-for="(items, category) in schedule" :key="category">
              <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 flex flex-col" x-show="items && items.length > 0">
                
                <h3 class="text-xl font-bold text-gray-800 dark:text-white/90 mb-5 flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-xl font-bold">
                    <i class="ph" :class="
                      category.includes('Washing') ? 'ph-drop text-blue-500' : 
                      category.includes('Maintenance') ? 'ph-wrench text-orange-500' : 
                      category.includes('Service') ? 'ph-garage text-brand-500' : 
                      'ph-buildings text-purple-500'
                    "></i>
                  </div>
                  <span x-text="category"></span>
                  <span class="ml-auto bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm py-1 px-3 rounded-full font-semibold">
                    <span x-text="items.filter(i => i.completed).length"></span> / <span x-text="items.length"></span>
                  </span>
                </h3>
                 
                <div class="space-y-3 flex-1">
                  <template x-for="(item, index) in items" :key="index">
                    <div @click="item.completed = !item.completed" 
                         class="cursor-pointer rounded-xl border p-4 transition-all flex items-center justify-between gap-4 group"
                         :class="item.completed ? 'bg-success-50 dark:bg-success-500/10 border-success-200 dark:border-success-500/30' : 'bg-gray-50 border-gray-100 hover:border-brand-300 hover:shadow-sm dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-brand-500/50'">
                        <div>
                          <h4 class="font-bold text-md transition-colors" :class="item.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400'" x-text="item.area"></h4>
                          <p class="text-sm font-semibold mt-1" 
                             :class="item.completed ? 'text-gray-400 dark:text-gray-500 line-through' : (item.task.includes('FULL') ? 'text-brand-500' : 'text-gray-500 dark:text-gray-400')" 
                             x-text="item.task"></p>
                        </div>
                        <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors" 
                             :class="item.completed ? 'border-success-500 bg-success-500 text-white shadow-sm' : 'border-gray-300 dark:border-gray-600 text-transparent group-hover:border-brand-400'">
                          <i class="ph ph-check font-bold text-sm" x-show="item.completed"></i>
                        </div>
                    </div>
                  </template>
                </div>

              </div>
            </template>

          </div>
          
          <div class="mt-8">
            <button class="w-full rounded-2xl py-4 font-bold text-white text-lg transition-all bg-brand-500 hover:bg-brand-600 shadow-lg hover:shadow-brand-500/25 active:scale-[0.99]">
              Submit Daily Report
            </button>
          </div>

        </div>
      </main>
`;

depotHtml = depotHtml.replace(/<main>[\s\S]*?<\/main>/, newMainDepot);
fs.writeFileSync('src/depot-cleaning.html', depotHtml);

console.log('Successfully updated depot-cleaning.html layout');
