import { registerEnumType } from '@nestjs/graphql';

export enum game_currency {
    fHKD = "fHKD"
}


registerEnumType(game_currency, { name: 'game_currency', description: undefined })
