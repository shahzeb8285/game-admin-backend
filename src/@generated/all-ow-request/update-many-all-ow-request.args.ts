import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestUpdateManyMutationInput } from './all-ow-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AllOwRequestWhereInput } from './all-ow-request-where.input';

@ArgsType()
export class UpdateManyAllOwRequestArgs {

    @Field(() => AllOwRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => AllOwRequestUpdateManyMutationInput)
    data!: AllOwRequestUpdateManyMutationInput;

    @Field(() => AllOwRequestWhereInput, {nullable:true})
    @Type(() => AllOwRequestWhereInput)
    where?: AllOwRequestWhereInput;
}
