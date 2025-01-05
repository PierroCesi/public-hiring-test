import { CarbonEmissionRecipe } from "../carbonEmissionRecipe.entity";

export class CalculateCarbonEmissionRecipeDto {
    id: number;
    name: string;
    totalCarbonEmission: number | null;
    ingredients: {
        name: string;
        quantity: number;
        unit: string;
        //emissionCO2e: number;
    }[];

    static fromEntity(recipe: CarbonEmissionRecipe): CalculateCarbonEmissionRecipeDto {
        return {
            id: recipe.id,
            name: recipe.name,
            totalCarbonEmission: recipe.totalCarbonEmission,
            ingredients: recipe.ingredients.map(ingredient => ({
                name: ingredient.carbonEmissionFactor.name,
                quantity: ingredient.value,
                unit: ingredient.unit,
                //emissionCO2e: ingredient.carbonEmissionFactor.emissionCO2eInKgPerUnit * ingredient.value
            }))
        };
    }
}