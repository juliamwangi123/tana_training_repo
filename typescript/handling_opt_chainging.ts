type UserProfiles = {
    name: string;
    address?: {
        city: string;
    };
};

const userProfile: UserProfiles = { name: "Wambo", address: { city: "Nairobi" } };

console.log(userProfile.address?.city); 