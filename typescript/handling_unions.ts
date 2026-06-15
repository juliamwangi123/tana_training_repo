type  UserResponse = {
    data: string | null;  
    error: string | null;
};

const success: UserResponse = { data: "user fetched", error: null };
const failure: UserResponse = { data: null, error: "not found" };


console.log(success);
console.log(failure);