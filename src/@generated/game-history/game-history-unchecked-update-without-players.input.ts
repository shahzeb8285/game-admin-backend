import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { game_rebatesUncheckedUpdateManyWithoutGame_historyNestedInput } from '../game-rebates/game-rebates-unchecked-update-many-without-game-history-nested.input';

@InputType()
export class game_historyUncheckedUpdateWithoutPlayersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    game_history_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    game_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    i_gamedesc?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    bet_amount?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    win_amount?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    transaction_date?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    cdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => game_rebatesUncheckedUpdateManyWithoutGame_historyNestedInput, {nullable:true})
    game_rebates?: game_rebatesUncheckedUpdateManyWithoutGame_historyNestedInput;
}
