<script setup lang="ts">
import { defineComponent, reactive } from "vue";
import {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
const handleEvents = (events: EventApi[]) => {
  currentEvents = events;
};
const handleWeekendsToggle = () => {
  calendarOptions.weekends = !calendarOptions.weekends; // update a property
};
const handleDateSelect = (selectInfo: DateSelectArg) => {
  let title = prompt("请输入新添加事件的名称");
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  }
};
const handleEventClick = (clickInfo: EventClickArg) => {
  if (confirm(`确定删除该事件吗 '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
  }
};
let calendarOptions = reactive<CalendarOptions>({
  buttonText: {
    today: "今天",
    month: "月视图",
    week: "周视图",
    day: "日视图",
    prev: "后退",
    next: "前进",
  },
  // columnFormat: {
  //   month: "dddd",
  //   week: "dddd M-d",
  //   day: "dddd M-d",
  // },
  titleFormat: { year: "numeric", month: "short", day: "numeric" },
  // monthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  // dayNames: [
  //   "星期天",
  //   "星期一",
  //   "星期二",
  //   "星期三",
  //   "星期四",
  //   "星期五",
  //   "星期六",
  // ],
  navLinks: true, // can click day/week names to navigate views
  locale: "zh-cn",
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
  ],
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  initialView: "dayGridMonth",
  initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  // eventAdd:
  // eventChange:
  // eventRemove:
});
let currentEvents = reactive<EventApi[]>([]);

/* export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: ({
        buttonText: {
          today: "今天",
          month: "月视图",
          week: "周视图",
          day: "日视图",
          prev: "后退",
          next: "前进",
        },
        timeFormat: {
          "": "H:mm{-H:mm}",
        },
        columnFormat: {
          month: "dddd",
          week: "dddd M-d",
          day: "dddd M-d",
        },
        titleFormat: { year: "numeric", month: "short", day: "numeric" },
        monthNames: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ],
        dayNames: [
          "星期天",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
        navLinks: true, // can click day/week names to navigate views
        locale: "zh-cn",
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        // eventAdd:
        // eventChange:
        // eventRemove:
      } as CalendarOptions),
      currentEvents: [] as EventApi[],
    };
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    handleDateSelect(selectInfo: DateSelectArg) {
      let title = prompt("请输入新添加事件的名称");
      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect(); // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      }
    },
    handleEventClick(clickInfo: EventClickArg) {
      if (confirm(`确定删除该事件吗 '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
      }
    },
    handleEvents(events: EventApi[]) {
      this.currentEvents = events;
    },
  },
}); */
</script>

<template>
  <div class="demo-app">
    <div class="demo-app-sidebar">
      <div class="demo-app-sidebar-section">
        <h2>说明：</h2>
        <ul>
          <li>选择日期，系统将提示您创建新事件</li>
          <li>拖放和调整事件大小</li>
          <li>单击事件将其删除</li>
        </ul>
      </div>
      <div class="demo-app-sidebar-section">
        <label>
          <input
            type="checkbox"
            :checked="calendarOptions.weekends"
            @change="handleWeekendsToggle"
          />
          切换隐藏周末
        </label>
      </div>
      <div class="demo-app-sidebar-section">
        <h2>所有事件 ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for="event in currentEvents" :key="event.id">
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="demo-app-main">
      <FullCalendar class="demo-app-calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang="css" scoped>
h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>
