// Description: Motel customer details

const Customer = {
    first: 'Ricky',
    last: 'Bobby',
    birthDate: new Date('1971-07-16'),
    gender: 'male',
    roomPreferences: ['non-smoking', 'queen bed', 'pool access', 'ground floor', 'wheelchair access', 'kitchenette'],
    paymentMethod: 'Credit Card',
    mailingAddress: {
        street: '17240 Connor Quay Ct',
        city: 'Cornelius',
        state: 'NC',
        zipCode: '10001',
    },
    phoneNumber: '(123) 456-7890',
    checkInOut: {
        checkInDate: new Date('2024-06-15'),
        checkOutDate: new Date('2024-06-25'),
    },

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    },

    getDurationOfStay() {
        const oneDay = 24 * 60 * 60 * 1000;
        const duration = Math.round((this.checkInOut.checkOutDate - this.checkInOut.checkInDate) / oneDay);
        return duration;
    },

    getDescription() {
        return `
            Our customer ${this.first} ${this.last} is ${this.getAge()} years old. He identifies as a ${this.gender}. 
            He wishes to have a ${this.roomPreferences[0]} room with a ${this.roomPreferences[1]}. He would like ${this.roomPreferences[2]} and for his room to be on the ${this.roomPreferences[3]} with ${this.roomPreferences[4]} and a ${this.roomPreferences[5]}. He will pay by ${this.paymentMethod}.
            His mailing Address is ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.state}, ${this.mailingAddress.zipCode}.
            His phone number is ${this.phoneNumber} and will be staying in the motel from ${this.checkInOut.checkInDate.toDateString()}
            to ${this.checkInOut.checkOutDate.toDateString()} for a duration of ${this.getDurationOfStay()} days.
        `;
    }
};

console.log(Customer.getDescription());
document.getElementById('output').textContent = Customer.getDescription();
