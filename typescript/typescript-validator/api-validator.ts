interface UserProfile {
    id: number;
    username: string;
    settings?: {
        notifications: boolean;
    };
}

const person1: UserProfile = {
    id: 1,
    username: "wambo",
    settings: {
        notifications: true
    }
};

const person2: UserProfile = {
    id: 2,
    username: "julia",
    settings: {
        notifications: false
    }
};

const person3: UserProfile = {
    id: 3,
    username: "brian"
};

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

console.log(`${person1.username}: ${isNotified(person1)}`);
console.log(`${person2.username}: ${isNotified(person2)}`);
console.log(`${person3.username}: ${isNotified(person3)}`);