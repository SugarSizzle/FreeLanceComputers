import { abductionsData } from './databases/abductionsData.js';

const truncatedData = abductionsData.map(report => ({
    location: report.location,
    details: report.details.length > 50 
        ? report.details.substring(0, 50) + '...' 
        : report.details
}));

console.log('\n🛸 ALIEN ABDUCTION REPORTS 🛸\n');
console.log(`Total Reports: ${abductionsData.length}\n`);
console.table(truncatedData);

