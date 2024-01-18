import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminsOrderByWithRelationInput } from '../admins/admins-order-by-with-relation.input';

@InputType()
export class admin_login_logsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    login_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;

    @Field(() => AdminsOrderByWithRelationInput, {nullable:true})
    admins?: AdminsOrderByWithRelationInput;
}
