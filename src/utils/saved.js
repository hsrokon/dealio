import { createContext } from "react";

export const SavedContext = createContext();

//get local storage
const getSaved = (category) => {
    if (category==='Electronics') {
        const eleIdsStr = localStorage.getItem('Electronics')
        if (eleIdsStr) {
            const eleIds = JSON.parse(eleIdsStr)
            return eleIds;
        }
        return [];
    }
    if (category==='Food') {
        const foodIdsStr = localStorage.getItem('Food')
        if (foodIdsStr) {
            const foodIds = JSON.parse(foodIdsStr)
            return foodIds;
        }
        return [];
    }
    if (category==='Fashion') {
        const fashionIdsStr = localStorage.getItem('Fashion')
        if (fashionIdsStr) {
            const fashionIds = JSON.parse(fashionIdsStr)
            return fashionIds;
        }
        return [];
    }
    if (category==='Beauty') {
        const beautyIdsStr = localStorage.getItem('Beauty')
        if (beautyIdsStr) {
            const beautyIds = JSON.parse(beautyIdsStr)
            return beautyIds;
        }
        return [];
    }
    if (category==='Travel') {
        const travelIdsStr = localStorage.getItem('Travel')
        if (travelIdsStr) {
            const travelIds = JSON.parse(travelIdsStr)
            return travelIds;
        }
        return [];
    }

}

//save to local storage
const saveToLS = (id, category) => {
    if (category==='Electronics') {
        const eleSavedIds = getSaved('Electronics')
        if (eleSavedIds.includes(id)) {
            const updatedEleSavedIds = eleSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Electronics', JSON.stringify(updatedEleSavedIds))
            return;
        }
        eleSavedIds.push(id)
        const eleSavedIdsStr = JSON.stringify(eleSavedIds)
        localStorage.setItem('Electronics',  eleSavedIdsStr)
    }
    if (category==='Food') {
        const foodSavedIds = getSaved('Food')
        if (foodSavedIds.includes(id)) {
            const updatedFoodSavedIds = foodSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Food', JSON.stringify(updatedFoodSavedIds))
            return;
        }
        foodSavedIds.push(id)
        const foodSavedIdsStr = JSON.stringify(foodSavedIds)
        localStorage.setItem('Food',  foodSavedIdsStr)
    }
    if (category==='Fashion') {
        const fashionSavedIds = getSaved('Fashion')
        if (fashionSavedIds.includes(id)) {
            const updatedFashionSavedIds = fashionSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Fashion', JSON.stringify(updatedFashionSavedIds))
            return;
        }
        fashionSavedIds.push(id)
        const fashionSavedIdsStr = JSON.stringify(fashionSavedIds)
        localStorage.setItem('Fashion',  fashionSavedIdsStr)
    }
    if (category==='Beauty') {
        const beautySavedIds = getSaved('Beauty')
        if (beautySavedIds.includes(id)) {
            const updatedBeautySavedIds = beautySavedIds.filter(ids => ids !==id);
            localStorage.setItem('Beauty', JSON.stringify(updatedBeautySavedIds))
            return;
        }
        beautySavedIds.push(id)
        const beautySavedIdsStr = JSON.stringify(beautySavedIds)
        localStorage.setItem('Beauty',  beautySavedIdsStr)
    }
    if (category==='Travel') {
        const travelSavedIds = getSaved('Travel')
        if (travelSavedIds.includes(id)) {
            const updatedTravelSavedIds = travelSavedIds.filter(ids => ids !==id);
            localStorage.setItem('Travel', JSON.stringify(updatedTravelSavedIds))
            return;
        }
        travelSavedIds.push(id)
        const travelSavedIdsStr = JSON.stringify(travelSavedIds)
        localStorage.setItem('Travel',  travelSavedIdsStr)
    }
}

export { getSaved, saveToLS }