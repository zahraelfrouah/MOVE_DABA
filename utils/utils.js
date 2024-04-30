import { useSelector } from "react-redux";

export function isAuthenticated() {
    const currentUser = useSelector((state) => state.user.currentUser);
    return currentUser !== null && currentUser !== undefined; // Example check
}

export const truncateTaskName = (name, maxLength) => {
    return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
};

// Function to format date
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};