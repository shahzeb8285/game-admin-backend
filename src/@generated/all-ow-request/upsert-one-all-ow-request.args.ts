import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AllOwRequestWhereUniqueInput } from './all-ow-request-where-unique.input';
import { Type } from 'class-transformer';
import { AllOwRequestCreateInput } from './all-ow-request-create.input';
import { AllOwRequestUpdateInput } from './all-ow-request-update.input';

@ArgsType()
export class UpsertOneAllOwRequestArgs {

    @Field(() => AllOwRequestWhereUniqueInput, {nullable:false})
    @Type(() => AllOwRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AllOwRequestWhereUniqueInput, 'allow_request_id'>;

    @Field(() => AllOwRequestCreateInput, {nullable:false})
    @Type(() => AllOwRequestCreateInput)
    create!: AllOwRequestCreateInput;

    @Field(() => AllOwRequestUpdateInput, {nullable:false})
    @Type(() => AllOwRequestUpdateInput)
    update!: AllOwRequestUpdateInput;
}
