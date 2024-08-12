// Dataset for the weekly food waste for Mayuri Catering
const mayuriData = [
    { week: 1, mealsServed: 2500, wasted: 250, overproduction: 100, spoilage: 80, prepWaste: 70 },
    { week: 2, mealsServed: 2700, wasted: 270, overproduction: 110, spoilage: 90, prepWaste: 70 },
    { week: 3, mealsServed: 2600, wasted: 240, overproduction: 90, spoilage: 70, prepWaste: 80 },
    { week: 4, mealsServed: 2800, wasted: 300, overproduction: 120, spoilage: 100, prepWaste: 80 }
];

// Dataset for the weekly food waste for AB Catering
const abData = [
    { week: 1, mealsServed: 2300, wasted: 220, overproduction: 90, spoilage: 70, prepWaste: 60 },
    { week: 2, mealsServed: 2500, wasted: 250, overproduction: 100, spoilage: 80, prepWaste: 70 },
    { week: 3, mealsServed: 2400, wasted: 230, overproduction: 100, spoilage: 70, prepWaste: 60 },
    { week: 4, mealsServed: 2700, wasted: 200, overproduction: 70, spoilage: 60, prepWaste: 70 }
];

// Function to calculate impact metrics
function calculateImpact(data) {
    const costPerKg = 50; // INR per kg of wasted food
    const gallonsGasPerKg = 0.2; // Gallons of gas wasted per kg
    const gallonsWaterPerKg = 10; // Gallons of water wasted per kg

    let totalCost = 0;
    let totalGasWasted = 0;
    let totalWaterWasted = 0;

    data.forEach(week => {
        totalCost += week.wasted * costPerKg;
        totalGasWasted += week.wasted * gallonsGasPerKg;
        totalWaterWasted += week.wasted * gallonsWaterPerKg;
    });

    const annualCost = totalCost * 52;

    return {
        totalCost,
        annualCost,
        totalGasWasted,
        totalWaterWasted
    };
}

// Calculate metrics for Mayuri Catering
const mayuriImpact = calculateImpact(mayuriData);

// Update the financial and environmental impact section for Mayuri Catering
document.getElementById('mayuriTotalCost').textContent = mayuriImpact.totalCost.toFixed(2);
document.getElementById('mayuriAnnualCost').textContent = (mayuriImpact.totalCost * 52).toFixed(2);
document.getElementById('mayuriGasWasted').textContent = mayuriImpact.totalGasWasted.toFixed(2);
document.getElementById('mayuriWaterWasted').textContent = mayuriImpact.totalWaterWasted.toFixed(2);

// Calculate metrics for AB Catering
const abImpact = calculateImpact(abData);

// Update the financial and environmental impact section for AB Catering
document.getElementById('abTotalCost').textContent = abImpact.totalCost.toFixed(2);
document.getElementById('abAnnualCost').textContent = (abImpact.totalCost * 52).toFixed(2);
document.getElementById('abGasWasted').textContent = abImpact.totalGasWasted.toFixed(2);
document.getElementById('abWaterWasted').textContent = abImpact.totalWaterWasted.toFixed(2);

// Chart.js for visualizing the data for Mayuri Catering
const ctxMayuri = document.getElementById('mayuriChart').getContext('2d');
const mayuriChart = new Chart(ctxMayuri, {
    type: 'bar',
    data: {
        labels: mayuriData.map(week => `Week ${week.week}`),
        datasets: [
            {
                label: 'Overproduction (kg)',
                data: mayuriData.map(week => week.overproduction),
                backgroundColor: '#66bb6a'
            },
            {
                label: 'Spoilage (kg)',
                data: mayuriData.map(week => week.spoilage),
                backgroundColor: '#ffa726'
            },
            {
                label: 'Prep Waste (kg)',
                data: mayuriData.map(week => week.prepWaste),
                backgroundColor: '#ef5350'
            },
            {
                label: 'Total Wasted (kg)',
                data: mayuriData.map(week => week.wasted),
                backgroundColor: '#42a5f5'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Kilograms'
                }
            }
        }
    }
});

// Chart.js for visualizing the data for AB Catering
const ctxAb = document.getElementById('abChart').getContext('2d');
const abChart = new Chart(ctxAb, {
    type: 'bar',
    data: {
        labels: abData.map(week => `Week ${week.week}`),
        datasets: [
            {
                label: 'Overproduction (kg)',
                data: abData.map(week => week.overproduction),
                backgroundColor: '#66bb6a'
            },
            {
                label: 'Spoilage (kg)',
                data: abData.map(week => week.spoilage),
                backgroundColor: '#ffa726'
            },
            {
                label: 'Prep Waste (kg)',
                data: abData.map(week => week.prepWaste),
                backgroundColor: '#ef5350'
            },
            {
                label: 'Total Wasted (kg)',
                data: abData.map(week => week.wasted),
                backgroundColor: '#42a5f5'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Kilograms'
                }
            }
        }
    }
});

// Preventive Measures and Importance of the Project
const preventiveMeasures = `
    This project not only raises awareness about food wastage at VIT Bhopal University but also provides actionable insights to reduce it. 
    By tracking food waste and its financial and environmental impacts, we can implement strategies such as:
    - Better inventory management to reduce overproduction.
    - Educating staff and students on portion control to minimize leftovers.
    - Composting spoiled food instead of throwing it away.
    - Collaborating with local food banks to donate surplus food.
`;

console.log(preventiveMeasures); // You can display this on the webpage as needed.
