import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentCreateManyPlayersInput } from './manual-adjustment-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class ManualAdjustmentCreateManyPlayersInputEnvelope {

    @Field(() => [ManualAdjustmentCreateManyPlayersInput], {nullable:false})
    @Type(() => ManualAdjustmentCreateManyPlayersInput)
    data!: Array<ManualAdjustmentCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
