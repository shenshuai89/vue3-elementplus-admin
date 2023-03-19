<template>
  <div class="mockjs-table">
    <el-table :data="tableData.list" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column label="Delivery Info">
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column label="Address Info">
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" width="180" />
          <el-table-column prop="desc" label="Desc" />
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { getTableList } from '@/api/table';
const tableData = reactive({
  list: [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ],
});
onMounted(async () => {
  const res = await getTableList();
  if (res.code === '0') {
    tableData.list = res.data.items;
  }
});
</script>
<style lang="scss" scoped></style>
