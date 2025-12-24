<template>
    <table>
        <thead>
            <tr>
                <th v-for="(header, i) in headers" :key="i" :style="'text-align:' + header.align">
                    <div :style="'display: flex; justify-content:' + header.align">
                        <FishButton v-if="header.name" simple :append-icon="sortingBy == header.key ? sortIcon : ''" :text="header.name" style="text-transform: capitalize; font-weight: 400; letter-spacing: normal;" @click="sortBy(header.key)"/>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in pageData" :key="i" tabindex="0" @click="$emit('click', item)">
                <td v-for="(header, j) in headers" :key="j" :style="'text-align:' + header.align">
                    <template v-if="$slots[header.key]">
                        <slot :name="header.key" :value="item[header.key]" :row="item" :header="header"/>
                    </template>

                    <template v-else>
                        {{ item[header.key] }}
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="table-footer">
        <FishButton simple :disabled="page == 1" icon="mdi:menu-left" @click="page--"/>
        <p>Page {{ page }} of {{ pageCount }}</p>
        <FishButton simple :disabled="page == pageCount" icon="mdi:menu-right" @click="page++"/>
    </div>
</template>

<script setup>
const props = defineProps({
    headers: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    defaultSortBy: { type: String, default: ''},
    defaultSortOrder: { type: String, default: 'ascending' },
    itemsPerPage: { type: Number, default: 5 }
})
defineEmits(['click'])
const sortedData = ref(props.data)
const page = useState(props.type == 'Assets' ? 'assetsPage' : 'liabilitiesPage', () => 1)
const pageData = computed(() => sortedData.value.slice((page.value - 1) * props.itemsPerPage, page.value * props.itemsPerPage))
const pageCount = computed(() => Math.ceil(sortedData.value.length / props.itemsPerPage))
const sortingBy = ref(props.defaultSortBy)
const sortingOrder = ref(props.defaultSortOrder)

sortData()

function sortBy(column) {
    if (sortingBy.value == column) {
        if (sortingOrder.value == 'descending') {
            sortingOrder.value = 'ascending'
        }
        else {
            sortingOrder.value = 'descending'
        }
    }
    else {
        sortingBy.value = column;
        sortingOrder.value = 'ascending'
    }
    sortData()
}

function sortData() {
    const header = props.headers.find(h => h.key === sortingBy.value)
    if (!header) return

    const key = header.key

    sortedData.value = [...props.data].sort((a, b) => {
        const valA = a[key]
        const valB = b[key]

        if (valA == null) return sortingOrder.value === 'ascending' ? -1 : 1
        if (valB == null) return sortingOrder.value === 'ascending' ? 1 : -1

        if (typeof valA === 'number' && typeof valB === 'number') {
            return sortingOrder.value === 'ascending' ? valA - valB : valB - valA
        }

        return sortingOrder.value === 'ascending'
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA))
    })

    page.value = 1
}

const sortIcon = computed(() => {
    return sortingOrder.value == 'descending' ? 'mdi:menu-up' : 'mdi:menu-down'
})
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    color: var(--text);
    & thead {
        border-bottom: var(--border);
        & th {
            padding: 1rem .5rem;
        }
    }
    & tbody {
        & tr {
            cursor: pointer;
            border-bottom: var(--border);
            transition-duration: .2s;
            &:hover, &:focus {
                background-color: var(--accent);
                border-color: transparent;
                outline: none;
            }
            & td {
                padding: 1rem .5rem;
            }
        }
    }
}

.table-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
    & p {
        margin: 0;
        white-space: nowrap;
    }
}
</style>
