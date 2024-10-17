const priceCalculator = (price,discount) => {
    try {
        const priceAfterDiscount = Math.ceil(discount/100 * price)
        console.log("priceAfterDiscount",priceAfterDiscount);
        return priceAfterDiscount;
    } catch (error) {
       console.log("Error in price calculator",error);
       throw error; 
    }
}

export default priceCalculator;