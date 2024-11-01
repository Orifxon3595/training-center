/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'root': RouteRecordInfo<'root', '/', Record<never, never>, Record<never, never>>,
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'apps-id': RouteRecordInfo<'apps-id', '/apps/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-cours-and-group': RouteRecordInfo<'apps-cours-and-group', '/apps/cours-and-group', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-customer-details-id': RouteRecordInfo<'apps-ecommerce-customer-details-id', '/apps/ecommerce/customer/details/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'apps-ecommerce-customer-list': RouteRecordInfo<'apps-ecommerce-customer-list', '/apps/ecommerce/customer/list', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-manage-review': RouteRecordInfo<'apps-ecommerce-manage-review', '/apps/ecommerce/manage-review', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-referrals': RouteRecordInfo<'apps-ecommerce-referrals', '/apps/ecommerce/referrals', Record<never, never>, Record<never, never>>,
    'apps-ecommerce-settings': RouteRecordInfo<'apps-ecommerce-settings', '/apps/ecommerce/settings', Record<never, never>, Record<never, never>>,
    'apps-students': RouteRecordInfo<'apps-students', '/apps/students', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
  }
}
