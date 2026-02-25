// 一车间数据 (Workshop 1 Data)
const WORKSHOP1_DATA = {
    pretreatment: {
        name: '前处理工段',
        icon: '🌊',
        equipment: [
            { id: 'w1-pretreatment-clean', name: '白车体擦净', heatingTime: 30, coolingTime: 0, water: 0.05, gas: 0.02, electricity: 3 },
            { id: 'w1-hot-water-wash', name: '热水洗', heatingTime: 60, coolingTime: 0, water: 0.8, gas: 0.4, electricity: 5 },
            { id: 'w1-pre-degreasing', name: '预脱脂', heatingTime: 90, coolingTime: 0, water: 0.6, gas: 0.3, electricity: 8 },
            { id: 'w1-degreasing', name: '脱脂', heatingTime: 120, coolingTime: 0, water: 0.8, gas: 0.5, electricity: 10 },
            { id: 'w1-zirconization', name: '锆化', heatingTime: 90, coolingTime: 0, water: 0.7, gas: 0.3, electricity: 7 }
        ]
    },
    ecoat: {
        name: '电泳工段',
        icon: '⚡',
        equipment: [
            { id: 'w1-ecoat', name: '电泳', heatingTime: 60, coolingTime: 0, water: 0.3, gas: 0.2, electricity: 15 },
            { id: 'w1-ecoat-oven', name: '电泳烘房', heatingTime: 90, coolingTime: 40, water: 0.1, gas: 1.2, electricity: 80 },
            { id: 'w1-ecoat-cooling', name: '电泳强冷', heatingTime: 0, coolingTime: 0, water: 0.2, gas: 0, electricity: 25 },
            { id: 'w1-ecoat-sanding', name: '电泳打磨', heatingTime: 0, coolingTime: 0, water: 0.05, gas: 0, electricity: 5 }
        ]
    },
    sealer: {
        name: '密封胶工段',
        icon: '🔧',
        equipment: [
            { id: 'w1-sealer-line', name: '密封胶线', heatingTime: 30, coolingTime: 0, water: 0.1, gas: 0.1, electricity: 12 },
            { id: 'w1-sealer-oven', name: '密封胶烘房', heatingTime: 60, coolingTime: 40, water: 0.05, gas: 0.8, electricity: 50 },
            { id: 'w1-sealer-cooling', name: '密封胶强冷', heatingTime: 0, coolingTime: 0, water: 0.15, gas: 0, electricity: 20 }
        ]
    },
    topcoat: {
        name: '面漆工段',
        icon: '🎨',
        equipment: [
            { id: 'w1-topcoat-clean', name: '擦净/吹扫', heatingTime: 30, coolingTime: 0, water: 0.2, gas: 0.05, electricity: 8 },
            { id: 'w1-basecoat-spray', name: '色漆喷涂', heatingTime: 40, coolingTime: 0, water: 0.3, gas: 0.15, electricity: 35 },
            { id: 'w1-flash-off', name: '热闪干', heatingTime: 45, coolingTime: 0, water: 0.05, gas: 0.3, electricity: 25 },
            { id: 'w1-clearcoat-spray', name: '清漆喷涂', heatingTime: 40, coolingTime: 0, water: 0.3, gas: 0.15, electricity: 35 },
            { id: 'w1-topcoat-oven', name: '面漆烘房', heatingTime: 60, coolingTime: 40, water: 0.1, gas: 1.0, electricity: 60 },
            { id: 'w1-topcoat-cooling', name: '面漆强冷', heatingTime: 0, coolingTime: 0, water: 0.2, gas: 0, electricity: 30 }
        ]
    },
    auxiliary: {
        name: '辅助设备',
        icon: '♻️',
        equipment: [
            { id: 'w1-waste-treatment', name: '废气处理设备', heatingTime: 30, coolingTime: 0, water: 0.1, gas: 0.6, electricity: 55 }
        ]
    }
};

// 二车间数据 (Workshop 2 Data) - 数据结构相同,但能耗系数可能不同
// 待后续优化实际数据
const WORKSHOP2_DATA = {
    pretreatment: {
        name: '前处理工段',
        icon: '🌊',
        equipment: [
            { id: 'w2-pretreatment-clean', name: '白车体擦净', heatingTime: 30, coolingTime: 0, water: 0.05, gas: 0.02, electricity: 3 },
            { id: 'w2-hot-water-wash', name: '热水洗', heatingTime: 60, coolingTime: 0, water: 0.8, gas: 0.4, electricity: 5 },
            { id: 'w2-pre-degreasing', name: '预脱脂', heatingTime: 90, coolingTime: 0, water: 0.6, gas: 0.3, electricity: 8 },
            { id: 'w2-degreasing', name: '脱脂', heatingTime: 120, coolingTime: 0, water: 0.8, gas: 0.5, electricity: 10 },
            { id: 'w2-zirconization', name: '锆化', heatingTime: 90, coolingTime: 0, water: 0.7, gas: 0.3, electricity: 7 }
        ]
    },
    ecoat: {
        name: '电泳工段',
        icon: '⚡',
        equipment: [
            { id: 'w2-ecoat', name: '电泳', heatingTime: 60, coolingTime: 0, water: 0.3, gas: 0.2, electricity: 15 },
            { id: 'w2-ecoat-oven', name: '电泳烘房', heatingTime: 90, coolingTime: 40, water: 0.1, gas: 1.2, electricity: 80 },
            { id: 'w2-ecoat-cooling', name: '电泳强冷', heatingTime: 0, coolingTime: 0, water: 0.2, gas: 0, electricity: 25 },
            { id: 'w2-ecoat-sanding', name: '电泳打磨', heatingTime: 0, coolingTime: 0, water: 0.05, gas: 0, electricity: 5 }
        ]
    },
    sealer: {
        name: '密封胶工段',
        icon: '🔧',
        equipment: [
            { id: 'w2-sealer-line', name: '密封胶线', heatingTime: 30, coolingTime: 0, water: 0.1, gas: 0.1, electricity: 12 },
            { id: 'w2-sealer-oven', name: '密封胶烘房', heatingTime: 60, coolingTime: 40, water: 0.05, gas: 0.8, electricity: 50 },
            { id: 'w2-sealer-cooling', name: '密封胶强冷', heatingTime: 0, coolingTime: 0, water: 0.15, gas: 0, electricity: 20 }
        ]
    },
    topcoat: {
        name: '面漆工段',
        icon: '🎨',
        equipment: [
            { id: 'w2-topcoat-clean', name: '擦净/吹扫', heatingTime: 30, coolingTime: 0, water: 0.2, gas: 0.05, electricity: 8 },
            { id: 'w2-basecoat-spray', name: '色漆喷涂', heatingTime: 40, coolingTime: 0, water: 0.3, gas: 0.15, electricity: 35 },
            { id: 'w2-flash-off', name: '热闪干', heatingTime: 45, coolingTime: 0, water: 0.05, gas: 0.3, electricity: 25 },
            { id: 'w2-clearcoat-spray', name: '清漆喷涂', heatingTime: 40, coolingTime: 0, water: 0.3, gas: 0.15, electricity: 35 },
            { id: 'w2-topcoat-oven', name: '面漆烘房', heatingTime: 60, coolingTime: 40, water: 0.1, gas: 1.0, electricity: 60 },
            { id: 'w2-topcoat-cooling', name: '面漆强冷', heatingTime: 0, coolingTime: 0, water: 0.2, gas: 0, electricity: 30 }
        ]
    },
    auxiliary: {
        name: '辅助设备',
        icon: '♻️',
        equipment: [
            { id: 'w2-waste-treatment', name: '废气处理设备', heatingTime: 30, coolingTime: 0, water: 0.1, gas: 0.6, electricity: 55 }
        ]
    }
};