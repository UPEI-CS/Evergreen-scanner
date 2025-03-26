export interface IdlObject {
  a: any[];
  classname: string;
  _isfieldmapper: boolean;
}

export interface AAACTSC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    xact(): COMBCIRC | null;
    xact(value: COMBCIRC | null): void;
    stat_cat(): ACTSC | null;
    stat_cat(value: ACTSC | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface AAASC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    xact(): COMBCIRC | null;
    xact(value: COMBCIRC | null): void;
    stat_cat(): ASC | null;
    stat_cat(value: ASC | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface AACA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    alert_type(): CCAT | null;
    alert_type(value: CCAT | null): void;
    copy(): ACP | null;
    copy(value: ACP | null): void;
    temp(): boolean | null;
    temp(value: boolean | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    create_staff(): AU | null;
    create_staff(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
    ack_time(): string | null;
    ack_time(value: string | null): void;
    ack_staff(): AU | null;
    ack_staff(value: AU | null): void;
}

export interface AACCT extends IdlObject {
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_staff(): AU | null;
    circ_staff(value: AU | null): void;
    id(): number | null;
    id(value: number | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    circ_type(): string | null;
    circ_type(value: string | null): void;
    item_type(): string | null;
    item_type(value: string | null): void;
}

export interface AACS extends IdlObject {
    checkin_lib(): AOU | null;
    checkin_lib(value: AOU | null): void;
    checkin_staff(): AU | null;
    checkin_staff(value: AU | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_staff(): AU | null;
    circ_staff(value: AU | null): void;
    desk_renewal(): boolean | null;
    desk_renewal(value: boolean | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    opac_renewal(): boolean | null;
    opac_renewal(value: boolean | null): void;
    phone_renewal(): boolean | null;
    phone_renewal(value: boolean | null): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    parent_circ(): ACIRC | null;
    parent_circ(value: ACIRC | null): void;
    checkin_scan_time(): string | null;
    checkin_scan_time(value: string | null): void;
    checkin_workstation(): AWS | null;
    checkin_workstation(value: AWS | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    billings(): MALLB | null;
    billings(value: MALLB | null): void;
    payments(): MALLP | null;
    payments(value: MALLP | null): void;
    billable_transaction(): MBT | null;
    billable_transaction(value: MBT | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    circ_type(): RCIRCT | null;
    circ_type(value: RCIRCT | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    aaactsc_entries(): AAACTSC | null;
    aaactsc_entries(value: AAACTSC | null): void;
    aaasc_entries(): AAASC | null;
    aaasc_entries(value: AAASC | null): void;
    active_circ(): CIRC | null;
    active_circ(value: CIRC | null): void;
    aged_circ(): ACIRC | null;
    aged_circ(value: ACIRC | null): void;
    auto_renewal(): boolean | null;
    auto_renewal(value: boolean | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
}

export interface AAHR extends IdlObject {
    status(): string | null;
    status(value: string | null): void;
    capture_time(): string | null;
    capture_time(value: string | null): void;
    current_copy(): ACP | null;
    current_copy(value: ACP | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    expire_time(): string | null;
    expire_time(value: string | null): void;
    fulfillment_lib(): AOU | null;
    fulfillment_lib(value: AOU | null): void;
    fulfillment_staff(): AU | null;
    fulfillment_staff(value: AU | null): void;
    fulfillment_time(): string | null;
    fulfillment_time(value: string | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    phone_notify(): boolean | null;
    phone_notify(value: boolean | null): void;
    sms_notify(): boolean | null;
    sms_notify(value: boolean | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    prev_check_time(): string | null;
    prev_check_time(value: string | null): void;
    request_lib(): AOU | null;
    request_lib(value: AOU | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    usr_post_code(): string | null;
    usr_post_code(value: string | null): void;
    usr_home_ou(): AOU | null;
    usr_home_ou(value: AOU | null): void;
    usr_profile(): PGT | null;
    usr_profile(value: PGT | null): void;
    usr_birth_year(): number | null;
    usr_birth_year(value: number | null): void;
    staff_placed(): boolean | null;
    staff_placed(value: boolean | null): void;
    selection_depth(): string | null;
    selection_depth(value: string | null): void;
    selection_ou(): AOU | null;
    selection_ou(value: AOU | null): void;
    target(): any;
    target(value: any): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    bib_rec(): RHRR | null;
    bib_rec(value: RHRR | null): void;
    frozen(): boolean | null;
    frozen(value: boolean | null): void;
    thaw_date(): string | null;
    thaw_date(value: string | null): void;
    shelf_time(): string | null;
    shelf_time(value: string | null): void;
    cancel_cause(): AHRCC | null;
    cancel_cause(value: AHRCC | null): void;
    cancel_note(): string | null;
    cancel_note(value: string | null): void;
    cut_in_line(): boolean | null;
    cut_in_line(value: boolean | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    shelf_expire_time(): string | null;
    shelf_expire_time(value: string | null): void;
    current_shelf_lib(): AOU | null;
    current_shelf_lib(value: AOU | null): void;
}

export interface AAL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    match_all(): boolean | null;
    match_all(value: boolean | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    mailing_address(): boolean | null;
    mailing_address(value: boolean | null): void;
    billing_address(): boolean | null;
    billing_address(value: boolean | null): void;
}

export interface AALINK extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    source(): ARE | null;
    source(value: ARE | null): void;
    target(): ARE | null;
    target(value: ARE | null): void;
    field(): ACSAF | null;
    field(value: ACSAF | null): void;
}

export interface ABA extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    sorter(): CRAD | null;
    sorter(value: CRAD | null): void;
    description(): string | null;
    description(value: string | null): void;
    fields(): ABAAFM | null;
    fields(value: ABAAFM | null): void;
    maps(): ABAAFM | null;
    maps(value: ABAAFM | null): void;
}

export interface ABAAFM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    field(): ACSAF | null;
    field(value: ACSAF | null): void;
    axis(): ABA | null;
    axis(value: ABA | null): void;
}

export interface ABHE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    bucket(): CUB | null;
    bucket(value: CUB | null): void;
    target(): number | null;
    target(value: number | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
    run_date(): string | null;
    run_date(value: string | null): void;
    cancelled(): string | null;
    cancelled(value: string | null): void;
    mappings(): ABHEM | null;
    mappings(value: ABHEM | null): void;
}

export interface ABHEM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    batch_hold_event(): ABHE | null;
    batch_hold_event(value: ABHE | null): void;
    hold(): AHR | null;
    hold(value: AHR | null): void;
}

export interface ABL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bib(): BRE | null;
    bib(value: BRE | null): void;
    authority(): ARE | null;
    authority(value: ARE | null): void;
}

export interface AC extends IdlObject {
    active(): boolean | null;
    active(value: boolean | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface ACA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    alert_type(): CCAT | null;
    alert_type(value: CCAT | null): void;
    copy(): ACP | null;
    copy(value: ACP | null): void;
    temp(): boolean | null;
    temp(value: boolean | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    create_staff(): AU | null;
    create_staff(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
    ack_time(): string | null;
    ack_time(value: string | null): void;
    ack_staff(): AU | null;
    ack_staff(value: AU | null): void;
}

export interface ACAS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    alert_type(): CCAT | null;
    alert_type(value: CCAT | null): void;
}

export interface ACCS extends IdlObject {
    num_circs(): number | null;
    num_circs(value: number | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    checkout_workstation(): string | null;
    checkout_workstation(value: string | null): void;
    last_renewal_time(): string | null;
    last_renewal_time(value: string | null): void;
    last_stop_fines(): string | null;
    last_stop_fines(value: string | null): void;
    last_stop_fines_time(): string | null;
    last_stop_fines_time(value: string | null): void;
    last_renewal_workstation(): string | null;
    last_renewal_workstation(value: string | null): void;
    last_checkin_workstation(): string | null;
    last_checkin_workstation(value: string | null): void;
    last_checkin_time(): string | null;
    last_checkin_time(value: string | null): void;
    last_checkin_scan_time(): string | null;
    last_checkin_scan_time(value: string | null): void;
}

export interface ACI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    inventory_date(): string | null;
    inventory_date(value: string | null): void;
    inventory_workstation(): AWS | null;
    inventory_workstation(value: AWS | null): void;
    copy(): ACP | null;
    copy(value: ACP | null): void;
}

export interface ACIRC extends IdlObject {
    checkin_lib(): AOU | null;
    checkin_lib(value: AOU | null): void;
    checkin_staff(): AU | null;
    checkin_staff(value: AU | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_staff(): AU | null;
    circ_staff(value: AU | null): void;
    desk_renewal(): boolean | null;
    desk_renewal(value: boolean | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    opac_renewal(): boolean | null;
    opac_renewal(value: boolean | null): void;
    phone_renewal(): boolean | null;
    phone_renewal(value: boolean | null): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    usr_post_code(): string | null;
    usr_post_code(value: string | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    checkin_workstation(): AWS | null;
    checkin_workstation(value: AWS | null): void;
    checkin_scan_time(): string | null;
    checkin_scan_time(value: string | null): void;
    parent_circ(): CIRC | null;
    parent_circ(value: CIRC | null): void;
    billings(): MALLB | null;
    billings(value: MALLB | null): void;
    payments(): MALLP | null;
    payments(value: MALLP | null): void;
    billable_transaction(): MBT | null;
    billable_transaction(value: MBT | null): void;
    circ_type(): RCIRCT | null;
    circ_type(value: RCIRCT | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    usr_home_ou(): any;
    usr_home_ou(value: any): void;
    usr_profile(): any;
    usr_profile(value: any): void;
    usr_birth_year(): number | null;
    usr_birth_year(value: number | null): void;
    copy_call_number(): ACN | null;
    copy_call_number(value: ACN | null): void;
    copy_location(): ACPL | null;
    copy_location(value: ACPL | null): void;
    copy_owning_lib(): AOU | null;
    copy_owning_lib(value: AOU | null): void;
    copy_circ_lib(): AOU | null;
    copy_circ_lib(value: AOU | null): void;
    copy_bib_record(): BRE | null;
    copy_bib_record(value: BRE | null): void;
    aaactsc_entries(): AAACTSC | null;
    aaactsc_entries(value: AAACTSC | null): void;
    aaasc_entries(): AAASC | null;
    aaasc_entries(value: AAASC | null): void;
    auto_renewal(): boolean | null;
    auto_renewal(value: boolean | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
}

export interface ACMC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    course_number(): string | null;
    course_number(value: string | null): void;
    section_number(): string | null;
    section_number(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    members(): ACMCU | null;
    members(value: ACMCU | null): void;
    materials(): ACMCM | null;
    materials(value: ACMCM | null): void;
    is_archived(): boolean | null;
    is_archived(value: boolean | null): void;
    terms_map(): ACMTCM | null;
    terms_map(value: ACMTCM | null): void;
}

export interface ACMCM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    course(): ACMC | null;
    course(value: ACMC | null): void;
    item(): ACP | null;
    item(value: ACP | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    temporary_record(): boolean | null;
    temporary_record(value: boolean | null): void;
    relationship(): string | null;
    relationship(value: string | null): void;
    original_status(): CCS | null;
    original_status(value: CCS | null): void;
    original_circ_modifier(): CCM | null;
    original_circ_modifier(value: CCM | null): void;
    original_location(): ACPL | null;
    original_location(value: ACPL | null): void;
    original_callnumber(): ACN | null;
    original_callnumber(value: ACN | null): void;
    original_circ_lib(): AOU | null;
    original_circ_lib(value: AOU | null): void;
}

export interface ACMCU extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    course(): ACMC | null;
    course(value: ACMC | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    usr_role(): ACMR | null;
    usr_role(value: ACMR | null): void;
}

export interface ACMR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    is_public(): boolean | null;
    is_public(value: boolean | null): void;
}

export interface ACMT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    start_date(): string | null;
    start_date(value: string | null): void;
    end_date(): string | null;
    end_date(value: string | null): void;
    courses(): ACMTCM | null;
    courses(value: ACMTCM | null): void;
    maps(): ACMTCM | null;
    maps(value: ACMTCM | null): void;
}

export interface ACMTCM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    term(): ACMT | null;
    term(value: ACMT | null): void;
    course(): ACMC | null;
    course(value: ACMC | null): void;
}

export interface ACN extends IdlObject {
    copies(): ACP | null;
    copies(value: ACP | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    notes(): ACNN | null;
    notes(value: ACNN | null): void;
    uri_maps(): AURICNM | null;
    uri_maps(value: AURICNM | null): void;
    uris(): AURICNM | null;
    uris(value: AURICNM | null): void;
    label_sortkey(): string | null;
    label_sortkey(value: string | null): void;
    label_class(): ACNC | null;
    label_class(value: ACNC | null): void;
    prefix(): ACNP | null;
    prefix(value: ACNP | null): void;
    suffix(): ACNS | null;
    suffix(value: ACNS | null): void;
    dewey(): RACND | null;
    dewey(value: RACND | null): void;
}

export interface ACNC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    normalizer(): string | null;
    normalizer(value: string | null): void;
    field(): string | null;
    field(value: string | null): void;
}

export interface ACNN extends IdlObject {
    call_number(): ACN | null;
    call_number(value: ACN | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): any;
    creator(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface ACNP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    label_sortkey(): string | null;
    label_sortkey(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface ACNS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    label_sortkey(): string | null;
    label_sortkey(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface ACP extends IdlObject {
    age_protect(): CRAHP | null;
    age_protect(value: CRAHP | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    call_number(): ACN | null;
    call_number(value: ACN | null): void;
    circ_as_type(): CITM | null;
    circ_as_type(value: CITM | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    copy_number(): string | null;
    copy_number(value: string | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    active_date(): string | null;
    active_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    dummy_isbn(): string | null;
    dummy_isbn(value: string | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    dummy_author(): string | null;
    dummy_author(value: string | null): void;
    dummy_title(): string | null;
    dummy_title(value: string | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    fine_level(): number | null;
    fine_level(value: number | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    id(): number | null;
    id(value: number | null): void;
    loan_duration(): number | null;
    loan_duration(value: number | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    price(): number | null;
    price(value: number | null): void;
    ref(): boolean | null;
    ref(value: boolean | null): void;
    status(): CCS | null;
    status(value: CCS | null): void;
    status_changed_time(): string | null;
    status_changed_time(value: string | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    floating(): CFG | null;
    floating(value: CFG | null): void;
    cost(): number | null;
    cost(value: number | null): void;
    notes(): ACPN | null;
    notes(value: ACPN | null): void;
    stat_cat_entry_copy_maps(): ASCECM | null;
    stat_cat_entry_copy_maps(value: ASCECM | null): void;
    circulations(): CIRC | null;
    circulations(value: CIRC | null): void;
    aged_circulations(): ACIRC | null;
    aged_circulations(value: ACIRC | null): void;
    all_circulations(): COMBCIRC | null;
    all_circulations(value: COMBCIRC | null): void;
    total_circ_count(): ERFCC | null;
    total_circ_count(value: ERFCC | null): void;
    last_circ(): RLC | null;
    last_circ(value: RLC | null): void;
    holds(): AHCM | null;
    holds(value: AHCM | null): void;
    stat_cat_entries(): ASCECM | null;
    stat_cat_entries(value: ASCECM | null): void;
    parts(): ACPM | null;
    parts(value: ACPM | null): void;
    peer_record_maps(): BPBCM | null;
    peer_record_maps(value: BPBCM | null): void;
    peer_records(): BPBCM | null;
    peer_records(value: BPBCM | null): void;
    last_captured_hold(): ALHR | null;
    last_captured_hold(value: ALHR | null): void;
    latest_inventory(): ALCI | null;
    latest_inventory(value: ALCI | null): void;
    copy_inventory(): ACI | null;
    copy_inventory(value: ACI | null): void;
    holds_count(): HASHOLDSCOUNT | null;
    holds_count(value: HASHOLDSCOUNT | null): void;
    tags(): ACPTCM | null;
    tags(value: ACPTCM | null): void;
    copy_alerts(): ACA | null;
    copy_alerts(value: ACA | null): void;
}

export interface ACPL extends IdlObject {
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    hold_verify(): boolean | null;
    hold_verify(value: boolean | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    orders(): ACPLO | null;
    orders(value: ACPLO | null): void;
    copies(): ACP | null;
    copies(value: ACP | null): void;
    label_prefix(): string | null;
    label_prefix(value: string | null): void;
    label_suffix(): string | null;
    label_suffix(value: string | null): void;
    checkin_alert(): boolean | null;
    checkin_alert(value: boolean | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    url(): string | null;
    url(value: string | null): void;
}

export interface ACPLG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    top(): boolean | null;
    top(value: boolean | null): void;
    location_maps(): ACPLGM | null;
    location_maps(value: ACPLGM | null): void;
}

export interface ACPLGM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    lgroup(): ACPLG | null;
    lgroup(value: ACPLG | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
}

export interface ACPLO extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    position(): number | null;
    position(value: number | null): void;
}

export interface ACPM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    part(): BMP | null;
    part(value: BMP | null): void;
}

export interface ACPN extends IdlObject {
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    id(): number | null;
    id(value: number | null): void;
    owning_copy(): ACP | null;
    owning_copy(value: ACP | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface ACPT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    tag_type(): CCTT | null;
    tag_type(value: CCTT | null): void;
    label(): string | null;
    label(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
    staff_note(): string | null;
    staff_note(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    url(): string | null;
    url(value: string | null): void;
}

export interface ACPTCM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    copy(): ACP | null;
    copy(value: ACP | null): void;
    tag(): ACPT | null;
    tag(value: ACPT | null): void;
}

export interface ACQAFAT extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQAFCB extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQAFET extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQAFSB extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQAFST extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQCL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): ACQCLT | null;
    type(value: ACQCLT | null): void;
    lineitem_detail(): ACQLID | null;
    lineitem_detail(value: ACQLID | null): void;
}

export interface ACQCLE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): ACQCLET | null;
    type(value: ACQCLET | null): void;
    claim(): ACQCL | null;
    claim(value: ACQCL | null): void;
    event_date(): string | null;
    event_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface ACQCLET extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    library_initiated(): boolean | null;
    library_initiated(value: boolean | null): void;
}

export interface ACQCLP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface ACQCLPA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    claim_policy(): ACQCLP | null;
    claim_policy(value: ACQCLP | null): void;
    action_interval(): any;
    action_interval(value: any): void;
    action(): ACQCLET | null;
    action(value: ACQCLET | null): void;
}

export interface ACQCLPAOUV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    claim_policy(): ACQCLP | null;
    claim_policy(value: ACQCLP | null): void;
    action_interval(): any;
    action_interval(value: any): void;
    action(): ACQCLET | null;
    action(value: ACQCLET | null): void;
    claim_policy_org_unit(): number | null;
    claim_policy_org_unit(value: number | null): void;
    action_org_unit(): number | null;
    action_org_unit(value: number | null): void;
}

export interface ACQCLT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface ACQCR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    label(): string | null;
    label(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    keep_debits(): boolean | null;
    keep_debits(value: boolean | null): void;
}

export interface ACQCT extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface ACQDA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fund_debit(): ACQFDEB | null;
    fund_debit(value: ACQFDEB | null): void;
    debit_amount(): number | null;
    debit_amount(value: number | null): void;
    funding_source_credit(): ACQFSCRED | null;
    funding_source_credit(value: ACQFSCRED | null): void;
    credit_amount(): number | null;
    credit_amount(value: number | null): void;
}

export interface ACQDF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    skip_count(): number | null;
    skip_count(value: number | null): void;
    entries(): ACQDFE | null;
    entries(value: ACQDFE | null): void;
    use_count(): number | null;
    use_count(value: number | null): void;
}

export interface ACQDFA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    formula(): ACQDF | null;
    formula(value: ACQDF | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
}

export interface ACQDFE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    formula(): ACQDF | null;
    formula(value: ACQDF | null): void;
    position(): number | null;
    position(value: number | null): void;
    item_count(): number | null;
    item_count(value: number | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    collection_code(): string | null;
    collection_code(value: string | null): void;
}

export interface ACQEDI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    host(): string | null;
    host(value: string | null): void;
    username(): string | null;
    username(value: string | null): void;
    password(): string | null;
    password(value: string | null): void;
    account(): string | null;
    account(value: string | null): void;
    path(): string | null;
    path(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    last_activity(): string | null;
    last_activity(value: string | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    in_dir(): string | null;
    in_dir(value: string | null): void;
    vendacct(): string | null;
    vendacct(value: string | null): void;
    vendcode(): string | null;
    vendcode(value: string | null): void;
    attr_set(): AEAS | null;
    attr_set(value: AEAS | null): void;
    use_attrs(): boolean | null;
    use_attrs(value: boolean | null): void;
}

export interface ACQEDIM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    account(): ACQEDI | null;
    account(value: ACQEDI | null): void;
    remote_file(): string | null;
    remote_file(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    translate_time(): string | null;
    translate_time(value: string | null): void;
    process_time(): string | null;
    process_time(value: string | null): void;
    error_time(): string | null;
    error_time(value: string | null): void;
    status(): string | null;
    status(value: string | null): void;
    edi(): string | null;
    edi(value: string | null): void;
    jedi(): string | null;
    jedi(value: string | null): void;
    error(): string | null;
    error(value: string | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    message_type(): string | null;
    message_type(value: string | null): void;
}

export interface ACQEXR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    from_currency(): ACQCT | null;
    from_currency(value: ACQCT | null): void;
    to_currency(): ACQCT | null;
    to_currency(value: ACQCT | null): void;
    ratio(): string | null;
    ratio(value: string | null): void;
}

export interface ACQF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    year(): number | null;
    year(value: number | null): void;
    currency_type(): ACQCT | null;
    currency_type(value: ACQCT | null): void;
    code(): string | null;
    code(value: string | null): void;
    rollover(): boolean | null;
    rollover(value: boolean | null): void;
    propagate(): boolean | null;
    propagate(value: boolean | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    balance_warning_percent(): number | null;
    balance_warning_percent(value: number | null): void;
    balance_stop_percent(): number | null;
    balance_stop_percent(value: number | null): void;
    summary(): string | null;
    summary(value: string | null): void;
    allocations(): ACQFA | null;
    allocations(value: ACQFA | null): void;
    debits(): ACQFDEB | null;
    debits(value: ACQFDEB | null): void;
    tags(): ACQFTM | null;
    tags(value: ACQFTM | null): void;
    allocation_total(): ACQFAT | null;
    allocation_total(value: ACQFAT | null): void;
    debit_total(): ACQFDT | null;
    debit_total(value: ACQFDT | null): void;
    encumbrance_total(): ACQFET | null;
    encumbrance_total(value: ACQFET | null): void;
    spent_total(): ACQFST | null;
    spent_total(value: ACQFST | null): void;
    combined_balance(): ACQFCB | null;
    combined_balance(value: ACQFCB | null): void;
    spent_balance(): ACQFSB | null;
    spent_balance(value: ACQFSB | null): void;
}

export interface ACQFA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    allocator(): AU | null;
    allocator(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
}

export interface ACQFAP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    fund_code(): string | null;
    fund_code(value: string | null): void;
    percent(): number | null;
    percent(value: number | null): void;
    allocator(): AU | null;
    allocator(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
}

export interface ACQFAT extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    years(): ACQFY | null;
    years(value: ACQFY | null): void;
}

export interface ACQFCB extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFDEB extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    origin_amount(): number | null;
    origin_amount(value: number | null): void;
    origin_currency_type(): ACQCT | null;
    origin_currency_type(value: ACQCT | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    encumbrance(): boolean | null;
    encumbrance(value: boolean | null): void;
    debit_type(): string | null;
    debit_type(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    invoice_entry(): ACQIE | null;
    invoice_entry(value: ACQIE | null): void;
    invoice_items(): ACQII | null;
    invoice_items(value: ACQII | null): void;
    po_items(): ACQPOI | null;
    po_items(value: ACQPOI | null): void;
    lineitem_details(): ACQLID | null;
    lineitem_details(value: ACQLID | null): void;
}

export interface ACQFDT extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFET extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    currency_type(): ACQCT | null;
    currency_type(value: ACQCT | null): void;
    code(): string | null;
    code(value: string | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    summary(): string | null;
    summary(value: string | null): void;
    allocations(): ACQFA | null;
    allocations(value: ACQFA | null): void;
    credits(): ACQFSCRED | null;
    credits(value: ACQFSCRED | null): void;
    fund_alloc_pcts(): ACQFAP | null;
    fund_alloc_pcts(value: ACQFAP | null): void;
}

export interface ACQFSB extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFSCRED extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    deadline_date(): string | null;
    deadline_date(value: string | null): void;
    effective_date(): string | null;
    effective_date(value: string | null): void;
}

export interface ACQFSRCAT extends IdlObject {
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFSRCB extends IdlObject {
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFSRCCT extends IdlObject {
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFST extends IdlObject {
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount(): number | null;
    amount(value: number | null): void;
}

export interface ACQFSUM extends IdlObject {
    id(): ACQF | null;
    id(value: ACQF | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    year(): number | null;
    year(value: number | null): void;
    currency_type(): ACQCT | null;
    currency_type(value: ACQCT | null): void;
    code(): string | null;
    code(value: string | null): void;
    rollover(): boolean | null;
    rollover(value: boolean | null): void;
    propagate(): boolean | null;
    propagate(value: boolean | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    balance_warning_percent(): number | null;
    balance_warning_percent(value: number | null): void;
    balance_stop_percent(): number | null;
    balance_stop_percent(value: number | null): void;
    allocated_total(): number | null;
    allocated_total(value: number | null): void;
    spent_total(): number | null;
    spent_total(value: number | null): void;
    encumbrance_total(): number | null;
    encumbrance_total(value: number | null): void;
    combined_balance(): number | null;
    combined_balance(value: number | null): void;
}

export interface ACQFT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    map_entries(): ACQFTM | null;
    map_entries(value: ACQFTM | null): void;
}

export interface ACQFTM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    tag(): ACQFT | null;
    tag(value: ACQFT | null): void;
}

export interface ACQFTR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    src_fund(): ACQF | null;
    src_fund(value: ACQF | null): void;
    src_amount(): number | null;
    src_amount(value: number | null): void;
    dest_fund(): ACQF | null;
    dest_fund(value: ACQF | null): void;
    dest_amount(): number | null;
    dest_amount(value: number | null): void;
    transfer_time(): string | null;
    transfer_time(value: string | null): void;
    transfer_user(): AU | null;
    transfer_user(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
    funding_source_credit(): ACQFSCRED | null;
    funding_source_credit(value: ACQFSCRED | null): void;
}

export interface ACQFY extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    calendar(): ACQFC | null;
    calendar(value: ACQFC | null): void;
    year(): number | null;
    year(value: number | null): void;
    year_begin(): string | null;
    year_begin(value: string | null): void;
    year_end(): string | null;
    year_end(value: string | null): void;
}

export interface ACQIE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    invoice(): ACQINV | null;
    invoice(value: ACQINV | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    inv_item_count(): number | null;
    inv_item_count(value: number | null): void;
    phys_item_count(): number | null;
    phys_item_count(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    billed_per_item(): boolean | null;
    billed_per_item(value: boolean | null): void;
    cost_billed(): number | null;
    cost_billed(value: number | null): void;
    actual_cost(): number | null;
    actual_cost(value: number | null): void;
    amount_paid(): number | null;
    amount_paid(value: number | null): void;
}

export interface ACQII extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    invoice(): ACQINV | null;
    invoice(value: ACQINV | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    fund_debit(): ACQFDEB | null;
    fund_debit(value: ACQFDEB | null): void;
    inv_item_type(): AIIT | null;
    inv_item_type(value: AIIT | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    note(): string | null;
    note(value: string | null): void;
    cost_billed(): number | null;
    cost_billed(value: number | null): void;
    actual_cost(): number | null;
    actual_cost(value: number | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    amount_paid(): number | null;
    amount_paid(value: number | null): void;
    po_item(): ACQPOI | null;
    po_item(value: ACQPOI | null): void;
    target(): number | null;
    target(value: number | null): void;
}

export interface ACQIM extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface ACQINV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    receiver(): AOU | null;
    receiver(value: AOU | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    shipper(): ACQPRO | null;
    shipper(value: ACQPRO | null): void;
    recv_date(): string | null;
    recv_date(value: string | null): void;
    recv_method(): ACQIM | null;
    recv_method(value: ACQIM | null): void;
    inv_type(): string | null;
    inv_type(value: string | null): void;
    inv_ident(): string | null;
    inv_ident(value: string | null): void;
    payment_auth(): string | null;
    payment_auth(value: string | null): void;
    payment_method(): ACQIPM | null;
    payment_method(value: ACQIPM | null): void;
    note(): string | null;
    note(value: string | null): void;
    close_date(): string | null;
    close_date(value: string | null): void;
    closed_by(): AU | null;
    closed_by(value: AU | null): void;
    entries(): ACQIE | null;
    entries(value: ACQIE | null): void;
    items(): ACQII | null;
    items(value: ACQII | null): void;
}

export interface ACQIPM extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface ACQLIA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    attr_type(): string | null;
    attr_type(value: string | null): void;
    attr_name(): string | null;
    attr_name(value: string | null): void;
    attr_value(): string | null;
    attr_value(value: string | null): void;
    definition(): ACQLIAD | null;
    definition(value: ACQLIAD | null): void;
    order_ident(): boolean | null;
    order_ident(value: boolean | null): void;
}

export interface ACQLIAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    ident(): boolean | null;
    ident(value: boolean | null): void;
}

export interface ACQLIAT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface ACQLID extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    eg_copy_id(): ACP | null;
    eg_copy_id(value: ACP | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    cn_label(): string | null;
    cn_label(value: string | null): void;
    recv_time(): string | null;
    recv_time(value: string | null): void;
    receiver(): AU | null;
    receiver(value: AU | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    fund_debit(): ACQFDEB | null;
    fund_debit(value: ACQFDEB | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    note(): string | null;
    note(value: string | null): void;
    collection_code(): string | null;
    collection_code(value: string | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    claims(): ACQCL | null;
    claims(value: ACQCL | null): void;
}

export interface ACQLIGAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    ident(): boolean | null;
    ident(value: boolean | null): void;
}

export interface ACQLIH extends IdlObject {
    audit_id(): number | null;
    audit_id(value: number | null): void;
    audit_time(): string | null;
    audit_time(value: string | null): void;
    audit_action(): string | null;
    audit_action(value: string | null): void;
    id(): JUB | null;
    id(value: JUB | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    selector(): AU | null;
    selector(value: AU | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    picklist(): ACQPL | null;
    picklist(value: ACQPL | null): void;
    expected_recv_time(): string | null;
    expected_recv_time(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    eg_bib_id(): BRE | null;
    eg_bib_id(value: BRE | null): void;
    source_label(): string | null;
    source_label(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    claim_policy(): ACQCLP | null;
    claim_policy(value: ACQCLP | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    estimated_unit_price(): number | null;
    estimated_unit_price(value: number | null): void;
    queued_record(): VQBR | null;
    queued_record(value: VQBR | null): void;
}

export interface ACQLILAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    ident(): boolean | null;
    ident(value: boolean | null): void;
}

export interface ACQLIMAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    ident(): boolean | null;
    ident(value: boolean | null): void;
    remove(): string | null;
    remove(value: string | null): void;
}

export interface ACQLIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    value(): string | null;
    value(value: string | null): void;
    alert_text(): ACQLIAT | null;
    alert_text(value: ACQLIAT | null): void;
    vendor_public(): boolean | null;
    vendor_public(value: boolean | null): void;
}

export interface ACQLIPAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    ident(): boolean | null;
    ident(value: boolean | null): void;
    remove(): string | null;
    remove(value: string | null): void;
}

export interface ACQLISUM extends IdlObject {
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    item_count(): number | null;
    item_count(value: number | null): void;
    recv_count(): number | null;
    recv_count(value: number | null): void;
    cancel_count(): number | null;
    cancel_count(value: number | null): void;
    delay_count(): number | null;
    delay_count(value: number | null): void;
    invoice_count(): number | null;
    invoice_count(value: number | null): void;
    claim_count(): number | null;
    claim_count(value: number | null): void;
    estimated_amount(): number | null;
    estimated_amount(value: number | null): void;
    encumbrance_amount(): number | null;
    encumbrance_amount(value: number | null): void;
    paid_amount(): number | null;
    paid_amount(value: number | null): void;
}

export interface ACQLISUMI extends IdlObject {
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    item_count(): number | null;
    item_count(value: number | null): void;
    recv_count(): number | null;
    recv_count(value: number | null): void;
    cancel_count(): number | null;
    cancel_count(value: number | null): void;
    delay_count(): number | null;
    delay_count(value: number | null): void;
    invoice_count(): number | null;
    invoice_count(value: number | null): void;
    claim_count(): number | null;
    claim_count(value: number | null): void;
    estimated_amount(): number | null;
    estimated_amount(value: number | null): void;
    encumbrance_amount(): number | null;
    encumbrance_amount(value: number | null): void;
    paid_amount(): number | null;
    paid_amount(value: number | null): void;
}

export interface ACQLIUAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    ident(): boolean | null;
    ident(value: boolean | null): void;
}

export interface ACQMAPINV extends IdlObject {
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    invoice(): ACQINV | null;
    invoice(value: ACQINV | null): void;
    po_item(): ACQPOI | null;
    po_item(value: ACQPOI | null): void;
    picklist(): ACQPL | null;
    picklist(value: ACQPL | null): void;
}

export interface ACQOFSCRED extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    sort_priority(): number | null;
    sort_priority(value: number | null): void;
    sort_date(): string | null;
    sort_date(value: string | null): void;
    funding_source(): ACQFS | null;
    funding_source(value: ACQFS | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface ACQPA extends IdlObject {
    address_type(): string | null;
    address_type(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    valid(): boolean | null;
    valid(value: boolean | null): void;
    fax_phone(): string | null;
    fax_phone(value: string | null): void;
}

export interface ACQPC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    name(): string | null;
    name(value: string | null): void;
    role(): string | null;
    role(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    phone(): string | null;
    phone(value: string | null): void;
    addresses(): ACQPCA | null;
    addresses(value: ACQPCA | null): void;
}

export interface ACQPCA extends IdlObject {
    address_type(): string | null;
    address_type(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    contact(): ACQPC | null;
    contact(value: ACQPC | null): void;
    valid(): boolean | null;
    valid(value: boolean | null): void;
    fax_phone(): string | null;
    fax_phone(value: string | null): void;
}

export interface ACQPHSM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    name(): string | null;
    name(value: string | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
}

export interface ACQPL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    entries(): JUB | null;
    entries(value: JUB | null): void;
    entry_count(): string | null;
    entry_count(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
}

export interface ACQPO extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    state(): ACQPOSTLBL | null;
    state(value: ACQPOSTLBL | null): void;
    ordering_agency(): AOU | null;
    ordering_agency(value: AOU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    order_date(): string | null;
    order_date(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    prepayment_required(): boolean | null;
    prepayment_required(value: boolean | null): void;
    lineitems(): JUB | null;
    lineitems(value: JUB | null): void;
    notes(): ACQPON | null;
    notes(value: ACQPON | null): void;
    lineitem_count(): number | null;
    lineitem_count(value: number | null): void;
    amount_encumbered(): number | null;
    amount_encumbered(value: number | null): void;
    amount_spent(): number | null;
    amount_spent(value: number | null): void;
    amount_estimated(): number | null;
    amount_estimated(value: number | null): void;
    po_items(): ACQPOI | null;
    po_items(value: ACQPOI | null): void;
}

export interface ACQPOH extends IdlObject {
    audit_id(): number | null;
    audit_id(value: number | null): void;
    audit_time(): string | null;
    audit_time(value: string | null): void;
    audit_action(): string | null;
    audit_action(value: string | null): void;
    id(): ACQPO | null;
    id(value: ACQPO | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    ordering_agency(): AOU | null;
    ordering_agency(value: AOU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    state(): string | null;
    state(value: string | null): void;
    order_date(): string | null;
    order_date(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    prepayment_required(): boolean | null;
    prepayment_required(value: boolean | null): void;
}

export interface ACQPOI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    fund_debit(): ACQFDEB | null;
    fund_debit(value: ACQFDEB | null): void;
    inv_item_type(): AIIT | null;
    inv_item_type(value: AIIT | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    note(): string | null;
    note(value: string | null): void;
    estimated_cost(): number | null;
    estimated_cost(value: number | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    target(): number | null;
    target(value: number | null): void;
}

export interface ACQPON extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    value(): string | null;
    value(value: string | null): void;
    vendor_public(): boolean | null;
    vendor_public(value: boolean | null): void;
}

export interface ACQPOSTLBL extends IdlObject {
    id(): string | null;
    id(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface ACQPRO extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    currency_type(): ACQCT | null;
    currency_type(value: ACQCT | null): void;
    code(): string | null;
    code(value: string | null): void;
    holding_tag(): string | null;
    holding_tag(value: string | null): void;
    addresses(): ACQPA | null;
    addresses(value: ACQPA | null): void;
    san(): string | null;
    san(value: string | null): void;
    edi_default(): ACQEDI | null;
    edi_default(value: ACQEDI | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    prepayment_required(): boolean | null;
    prepayment_required(value: boolean | null): void;
    url(): string | null;
    url(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    phone(): string | null;
    phone(value: string | null): void;
    fax_phone(): string | null;
    fax_phone(value: string | null): void;
    default_claim_policy(): ACQCLP | null;
    default_claim_policy(value: ACQCLP | null): void;
    default_copy_count(): number | null;
    default_copy_count(value: number | null): void;
    primary_contact(): ACQPC | null;
    primary_contact(value: ACQPC | null): void;
    contacts(): ACQPC | null;
    contacts(value: ACQPC | null): void;
    provider_notes(): ACQPRON | null;
    provider_notes(value: ACQPRON | null): void;
    holdings_subfields(): ACQPHSM | null;
    holdings_subfields(value: ACQPHSM | null): void;
    attributes(): ACQLIPAD | null;
    attributes(value: ACQLIPAD | null): void;
    edi_accounts(): ACQEDI | null;
    edi_accounts(value: ACQEDI | null): void;
    buyer_san(): string | null;
    buyer_san(value: string | null): void;
}

export interface ACQPRON extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface ACQR_DEBIT_BY_FUND extends IdlObject {
    invoice(): ACQINV | null;
    invoice(value: ACQINV | null): void;
    fund(): ACQF | null;
    fund(value: ACQF | null): void;
    encumbrance(): boolean | null;
    encumbrance(value: boolean | null): void;
    total_amount(): number | null;
    total_amount(value: number | null): void;
}

export interface ACQR_DEBIT_BY_FUND_TAG extends IdlObject {
    invoice(): ACQINV | null;
    invoice(value: ACQINV | null): void;
    tag(): ACQFT | null;
    tag(value: ACQFT | null): void;
    encumbrance(): boolean | null;
    encumbrance(value: boolean | null): void;
    total_amount(): number | null;
    total_amount(value: number | null): void;
}

export interface ACQR_INV_TOTALS extends IdlObject {
    id(): ACQINV | null;
    id(value: ACQINV | null): void;
    total_invoice_entry_cost_billed(): number | null;
    total_invoice_entry_cost_billed(value: number | null): void;
    total_invoice_entry_amount_paid(): number | null;
    total_invoice_entry_amount_paid(value: number | null): void;
    total_invoice_item_cost_billed(): number | null;
    total_invoice_item_cost_billed(value: number | null): void;
    total_invoice_item_amount_paid(): number | null;
    total_invoice_item_amount_paid(value: number | null): void;
    total_cost_billed(): number | null;
    total_cost_billed(value: number | null): void;
    total_amount_paid(): number | null;
    total_amount_paid(value: number | null): void;
}

export interface ACQSCL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): ACQCLT | null;
    type(value: ACQCLT | null): void;
    item(): SITEM | null;
    item(value: SITEM | null): void;
}

export interface ACQSCLE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): ACQCLET | null;
    type(value: ACQCLET | null): void;
    claim(): ACQSCL | null;
    claim(value: ACQSCL | null): void;
    event_date(): string | null;
    event_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface ACQSN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    receiver(): AOU | null;
    receiver(value: AOU | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    shipper(): ACQPRO | null;
    shipper(value: ACQPRO | null): void;
    recv_date(): string | null;
    recv_date(value: string | null): void;
    recv_method(): ACQIM | null;
    recv_method(value: ACQIM | null): void;
    process_date(): string | null;
    process_date(value: string | null): void;
    processed_by(): AU | null;
    processed_by(value: AU | null): void;
    container_code(): string | null;
    container_code(value: string | null): void;
    lading_number(): string | null;
    lading_number(value: string | null): void;
    note(): string | null;
    note(value: string | null): void;
    entries(): ACQSNE | null;
    entries(value: ACQSNE | null): void;
}

export interface ACQSNE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    shipment_notification(): ACQSN | null;
    shipment_notification(value: ACQSN | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    item_count(): number | null;
    item_count(value: number | null): void;
}

export interface ACRLID extends IdlObject {
    ordering_agency(): AOU | null;
    ordering_agency(value: AOU | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    lineitem_detail(): ACQLID | null;
    lineitem_detail(value: ACQLID | null): void;
    claim_policy_action(): ACQCLPA | null;
    claim_policy_action(value: ACQCLPA | null): void;
}

export interface ACS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    authority_fields(): ACSAF | null;
    authority_fields(value: ACSAF | null): void;
    thesauri(): AT | null;
    thesauri(value: AT | null): void;
}

export interface ACSAF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    main_entry(): ACSAF | null;
    main_entry(value: ACSAF | null): void;
    control_set(): ACS | null;
    control_set(value: ACS | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    sf_list(): string | null;
    sf_list(value: string | null): void;
    display_sf_list(): string | null;
    display_sf_list(value: string | null): void;
    nfi(): string | null;
    nfi(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    linking_subfield(): string | null;
    linking_subfield(value: string | null): void;
    sub_entries(): ACSAF | null;
    sub_entries(value: ACSAF | null): void;
    bib_fields(): ACSBF | null;
    bib_fields(value: ACSBF | null): void;
    thesauri(): AT | null;
    thesauri(value: AT | null): void;
    axis_maps(): ABAAFM | null;
    axis_maps(value: ABAAFM | null): void;
    joiner(): string | null;
    joiner(value: string | null): void;
    heading_field(): AHF | null;
    heading_field(value: AHF | null): void;
}

export interface ACSBF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    authority_field(): ACSAF | null;
    authority_field(value: ACSAF | null): void;
    tag(): string | null;
    tag(value: string | null): void;
}

export interface ACSBFMFM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bib_field(): ACSBF | null;
    bib_field(value: ACSBF | null): void;
    metabib_field(): CMF | null;
    metabib_field(value: CMF | null): void;
}

export interface ACSP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    patron(): AU | null;
    patron(value: AU | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    slot(): string | null;
    slot(value: string | null): void;
    staged(): string | null;
    staged(value: string | null): void;
    stage_staff(): AU | null;
    stage_staff(value: AU | null): void;
    arrival(): string | null;
    arrival(value: string | null): void;
    delivered(): string | null;
    delivered(value: string | null): void;
    delivery_staff(): AU | null;
    delivery_staff(value: AU | null): void;
    notes(): string | null;
    notes(value: string | null): void;
}

export interface ACT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    status(): CCS | null;
    status(value: CCS | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
    loan_duration(): number | null;
    loan_duration(value: number | null): void;
    fine_level(): number | null;
    fine_level(value: number | null): void;
    age_protect(): CRAHP | null;
    age_protect(value: CRAHP | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    ref(): boolean | null;
    ref(value: boolean | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    price(): number | null;
    price(value: number | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    circ_as_type(): CITM | null;
    circ_as_type(value: CITM | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    floating(): CFG | null;
    floating(value: CFG | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
}

export interface ACTSC extends IdlObject {
    entries(): ACTSCE | null;
    entries(value: ACTSCE | null): void;
    default_entries(): ACTSCED | null;
    default_entries(value: ACTSCED | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    usr_summary(): boolean | null;
    usr_summary(value: boolean | null): void;
    sip_field(): ACTSCSF | null;
    sip_field(value: ACTSCSF | null): void;
    sip_format(): string | null;
    sip_format(value: string | null): void;
    checkout_archive(): boolean | null;
    checkout_archive(value: boolean | null): void;
    required(): boolean | null;
    required(value: boolean | null): void;
    allow_freetext(): boolean | null;
    allow_freetext(value: boolean | null): void;
}

export interface ACTSCE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    stat_cat(): ACTSC | null;
    stat_cat(value: ACTSC | null): void;
    value(): string | null;
    value(value: string | null): void;
    default_entries(): ACTSCED | null;
    default_entries(value: ACTSCED | null): void;
}

export interface ACTSCECM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    stat_cat(): ACTSC | null;
    stat_cat(value: ACTSC | null): void;
    stat_cat_entry(): string | null;
    stat_cat_entry(value: string | null): void;
    target_usr(): AU | null;
    target_usr(value: AU | null): void;
}

export interface ACTSCED extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    stat_cat_entry(): ACTSCE | null;
    stat_cat_entry(value: ACTSCE | null): void;
    stat_cat(): ACTSC | null;
    stat_cat(value: ACTSC | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
}

export interface ACTSCSF extends IdlObject {
    field(): string | null;
    field(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    one_only(): boolean | null;
    one_only(value: boolean | null): void;
}

export interface AEA extends IdlObject {
    key(): string | null;
    key(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface AEAS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    attr_maps(): AEASM | null;
    attr_maps(value: AEASM | null): void;
    edi_accounts(): ACQEDI | null;
    edi_accounts(value: ACQEDI | null): void;
}

export interface AEASM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    attr_set(): AEAS | null;
    attr_set(value: AEAS | null): void;
    attr(): AEA | null;
    attr(value: AEA | null): void;
}

export interface AEC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    process_start_time(): string | null;
    process_start_time(value: string | null): void;
    process_end_time(): string | null;
    process_end_time(value: string | null): void;
    last_update_time(): string | null;
    last_update_time(value: string | null): void;
    closing(): AOUCD | null;
    closing(value: AOUCD | null): void;
    status(): AECS | null;
    status(value: AECS | null): void;
    circulations(): AECC | null;
    circulations(value: AECC | null): void;
    reservations(): AECR | null;
    reservations(value: AECR | null): void;
    holds(): AECH | null;
    holds(value: AECH | null): void;
}

export interface AECC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    circulation(): CIRC | null;
    circulation(value: CIRC | null): void;
    emergency_closing(): AEC | null;
    emergency_closing(value: AEC | null): void;
    original_due_date(): string | null;
    original_due_date(value: string | null): void;
    process_time(): string | null;
    process_time(value: string | null): void;
}

export interface AECH extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    hold(): AHR | null;
    hold(value: AHR | null): void;
    emergency_closing(): AEC | null;
    emergency_closing(value: AEC | null): void;
    original_shelf_expire_time(): string | null;
    original_shelf_expire_time(value: string | null): void;
    process_time(): string | null;
    process_time(value: string | null): void;
}

export interface AECR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    reservation(): BRESV | null;
    reservation(value: BRESV | null): void;
    emergency_closing(): AEC | null;
    emergency_closing(value: AEC | null): void;
    original_end_time(): string | null;
    original_end_time(value: string | null): void;
    process_time(): string | null;
    process_time(value: string | null): void;
}

export interface AECS extends IdlObject {
    id(): AEC | null;
    id(value: AEC | null): void;
    creator(): any;
    creator(value: any): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    process_start_time(): string | null;
    process_start_time(value: string | null): void;
    process_end_time(): string | null;
    process_end_time(value: string | null): void;
    last_update_time(): string | null;
    last_update_time(value: string | null): void;
    circulations(): number | null;
    circulations(value: number | null): void;
    circulations_complete(): number | null;
    circulations_complete(value: number | null): void;
    reservations(): number | null;
    reservations(value: number | null): void;
    reservations_complete(): number | null;
    reservations_complete(value: number | null): void;
    holds(): number | null;
    holds(value: number | null): void;
    holds_complete(): number | null;
    holds_complete(value: number | null): void;
}

export interface AFR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    ind1(): string | null;
    ind1(value: string | null): void;
    ind2(): string | null;
    ind2(value: string | null): void;
    record(): ARE | null;
    record(value: ARE | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface AFS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    status(): string | null;
    status(value: string | null): void;
    creation_time(): string | null;
    creation_time(value: string | null): void;
    scheduled_time(): string | null;
    scheduled_time(value: string | null): void;
    applied_time(): string | null;
    applied_time(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    stored_query(): QSQ | null;
    stored_query(value: QSQ | null): void;
    pkey_value(): string | null;
    pkey_value(value: string | null): void;
    fieldset_group(): AFSG | null;
    fieldset_group(value: AFSG | null): void;
    error_msg(): string | null;
    error_msg(value: string | null): void;
}

export interface AFSCV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fieldset(): AFS | null;
    fieldset(value: AFS | null): void;
    col(): string | null;
    col(value: string | null): void;
    val(): string | null;
    val(value: string | null): void;
}

export interface AFSG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    container(): number | null;
    container(value: number | null): void;
    container_type(): string | null;
    container_type(value: string | null): void;
    rollback_group(): AFSG | null;
    rollback_group(value: AFSG | null): void;
    rollback_time(): string | null;
    rollback_time(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface AHCM extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    id(): number | null;
    id(value: number | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    proximity(): any;
    proximity(value: any): void;
}

export interface AHF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    heading_type(): string | null;
    heading_type(value: string | null): void;
    heading_purpose(): string | null;
    heading_purpose(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    format(): string | null;
    format(value: string | null): void;
    heading_xpath(): string | null;
    heading_xpath(value: string | null): void;
    component_xpath(): string | null;
    component_xpath(value: string | null): void;
    type_xpath(): string | null;
    type_xpath(value: string | null): void;
    thesaurus_xpath(): string | null;
    thesaurus_xpath(value: string | null): void;
    thesaurus_override_xpath(): string | null;
    thesaurus_override_xpath(value: string | null): void;
    joiner(): string | null;
    joiner(value: string | null): void;
}

export interface AHN extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    id(): number | null;
    id(value: number | null): void;
    method(): string | null;
    method(value: string | null): void;
    note(): string | null;
    note(value: string | null): void;
    notify_staff(): AU | null;
    notify_staff(value: AU | null): void;
    notify_time(): string | null;
    notify_time(value: string | null): void;
}

export interface AHOPL extends IdlObject {
    status(): string | null;
    status(value: string | null): void;
    transit(): AHTC | null;
    transit(value: AHTC | null): void;
    capture_time(): string | null;
    capture_time(value: string | null): void;
    current_copy(): ACP | null;
    current_copy(value: ACP | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    expire_time(): string | null;
    expire_time(value: string | null): void;
    fulfillment_lib(): AOU | null;
    fulfillment_lib(value: AOU | null): void;
    fulfillment_staff(): AU | null;
    fulfillment_staff(value: AU | null): void;
    fulfillment_time(): string | null;
    fulfillment_time(value: string | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    phone_notify(): string | null;
    phone_notify(value: string | null): void;
    sms_notify(): string | null;
    sms_notify(value: string | null): void;
    sms_carrier(): CSC | null;
    sms_carrier(value: CSC | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    prev_check_time(): string | null;
    prev_check_time(value: string | null): void;
    request_lib(): AOU | null;
    request_lib(value: AOU | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    requestor(): AU | null;
    requestor(value: AU | null): void;
    selection_depth(): string | null;
    selection_depth(value: string | null): void;
    selection_ou(): AOU | null;
    selection_ou(value: AOU | null): void;
    target(): any;
    target(value: any): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    notify_time(): string | null;
    notify_time(value: string | null): void;
    notify_count(): number | null;
    notify_count(value: number | null): void;
    notifications(): AHN | null;
    notifications(value: AHN | null): void;
    bib_rec(): RHRR | null;
    bib_rec(value: RHRR | null): void;
    eligible_copies(): AHCM | null;
    eligible_copies(value: AHCM | null): void;
    frozen(): boolean | null;
    frozen(value: boolean | null): void;
    thaw_date(): string | null;
    thaw_date(value: string | null): void;
    shelf_time(): string | null;
    shelf_time(value: string | null): void;
    cancel_cause(): AHRCC | null;
    cancel_cause(value: AHRCC | null): void;
    cancel_note(): string | null;
    cancel_note(value: string | null): void;
    cut_in_line(): boolean | null;
    cut_in_line(value: boolean | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    shelf_expire_time(): string | null;
    shelf_expire_time(value: string | null): void;
    notes(): AHRN | null;
    notes(value: AHRN | null): void;
    current_shelf_lib(): AOU | null;
    current_shelf_lib(value: AOU | null): void;
    acq_request(): AUR | null;
    acq_request(value: AUR | null): void;
    copy_location_order_position(): number | null;
    copy_location_order_position(value: number | null): void;
    usr_first_given_name(): string | null;
    usr_first_given_name(value: string | null): void;
    usr_second_given_name(): string | null;
    usr_second_given_name(value: string | null): void;
    usr_family_name(): string | null;
    usr_family_name(value: string | null): void;
    usr_prefix(): string | null;
    usr_prefix(value: string | null): void;
    usr_suffix(): string | null;
    usr_suffix(value: string | null): void;
    usr_alias_or_first_given_name(): string | null;
    usr_alias_or_first_given_name(value: string | null): void;
    usr_display_name(): string | null;
    usr_display_name(value: string | null): void;
    usr_alias_or_display_name(): string | null;
    usr_alias_or_display_name(value: string | null): void;
    usr_alias(): string | null;
    usr_alias(value: string | null): void;
    call_number_label(): string | null;
    call_number_label(value: string | null): void;
    issuance_label(): string | null;
    issuance_label(value: string | null): void;
    is_staff_hold(): boolean | null;
    is_staff_hold(value: boolean | null): void;
    potential_copies(): number | null;
    potential_copies(value: number | null): void;
    behind_desk(): boolean | null;
    behind_desk(value: boolean | null): void;
    hopeless_date(): string | null;
    hopeless_date(value: string | null): void;
}

export interface AHR extends IdlObject {
    status(): string | null;
    status(value: string | null): void;
    transit(): AHTC | null;
    transit(value: AHTC | null): void;
    capture_time(): string | null;
    capture_time(value: string | null): void;
    current_copy(): ACP | null;
    current_copy(value: ACP | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    expire_time(): string | null;
    expire_time(value: string | null): void;
    fulfillment_lib(): AOU | null;
    fulfillment_lib(value: AOU | null): void;
    fulfillment_staff(): AU | null;
    fulfillment_staff(value: AU | null): void;
    fulfillment_time(): string | null;
    fulfillment_time(value: string | null): void;
    hold_type(): CHT | null;
    hold_type(value: CHT | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    phone_notify(): string | null;
    phone_notify(value: string | null): void;
    sms_notify(): string | null;
    sms_notify(value: string | null): void;
    sms_carrier(): CSC | null;
    sms_carrier(value: CSC | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    prev_check_time(): string | null;
    prev_check_time(value: string | null): void;
    request_lib(): AOU | null;
    request_lib(value: AOU | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    requestor(): AU | null;
    requestor(value: AU | null): void;
    reset_entries(): AHRRRE | null;
    reset_entries(value: AHRRRE | null): void;
    selection_depth(): string | null;
    selection_depth(value: string | null): void;
    selection_ou(): AOU | null;
    selection_ou(value: AOU | null): void;
    target(): any;
    target(value: any): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    canceled_by(): AU | null;
    canceled_by(value: AU | null): void;
    canceling_ws(): AWS | null;
    canceling_ws(value: AWS | null): void;
    notify_time(): string | null;
    notify_time(value: string | null): void;
    notify_count(): number | null;
    notify_count(value: number | null): void;
    notifications(): AHN | null;
    notifications(value: AHN | null): void;
    bib_rec(): RHRR | null;
    bib_rec(value: RHRR | null): void;
    eligible_copies(): AHCM | null;
    eligible_copies(value: AHCM | null): void;
    frozen(): boolean | null;
    frozen(value: boolean | null): void;
    thaw_date(): string | null;
    thaw_date(value: string | null): void;
    shelf_time(): string | null;
    shelf_time(value: string | null): void;
    cancel_cause(): AHRCC | null;
    cancel_cause(value: AHRCC | null): void;
    cancel_note(): string | null;
    cancel_note(value: string | null): void;
    cut_in_line(): boolean | null;
    cut_in_line(value: boolean | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    shelf_expire_time(): string | null;
    shelf_expire_time(value: string | null): void;
    notes(): AHRN | null;
    notes(value: AHRN | null): void;
    current_shelf_lib(): AOU | null;
    current_shelf_lib(value: AOU | null): void;
    behind_desk(): boolean | null;
    behind_desk(value: boolean | null): void;
    acq_request(): AUR | null;
    acq_request(value: AUR | null): void;
    hopeless_date(): string | null;
    hopeless_date(value: string | null): void;
}

export interface AHRCC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    manual(): boolean | null;
    manual(value: boolean | null): void;
}

export interface AHRN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    hold(): AHR | null;
    hold(value: AHR | null): void;
    title(): string | null;
    title(value: string | null): void;
    body(): string | null;
    body(value: string | null): void;
    slip(): boolean | null;
    slip(value: boolean | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    staff(): boolean | null;
    staff(value: boolean | null): void;
}

export interface AHRRR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    manual(): boolean | null;
    manual(value: boolean | null): void;
}

export interface AHRRRE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    hold(): AHR | null;
    hold(value: AHR | null): void;
    reset_reason(): AHRRR | null;
    reset_reason(value: AHRRR | null): void;
    reset_time(): string | null;
    reset_time(value: string | null): void;
    note(): string | null;
    note(value: string | null): void;
    requestor(): AU | null;
    requestor(value: AU | null): void;
    requestor_workstation(): AWS | null;
    requestor_workstation(value: AWS | null): void;
    previous_copy(): ACP | null;
    previous_copy(value: ACP | null): void;
}

export interface AHTC extends IdlObject {
    copy_status(): CCS | null;
    copy_status(value: CCS | null): void;
    dest(): AOU | null;
    dest(value: AOU | null): void;
    dest_recv_time(): string | null;
    dest_recv_time(value: string | null): void;
    hold(): AHR | null;
    hold(value: AHR | null): void;
    id(): number | null;
    id(value: number | null): void;
    persistant_transfer(): boolean | null;
    persistant_transfer(value: boolean | null): void;
    prev_hop(): any;
    prev_hop(value: any): void;
    source(): AOU | null;
    source(value: AOU | null): void;
    source_send_time(): string | null;
    source_send_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    transit_copy(): ATC | null;
    transit_copy(value: ATC | null): void;
    prev_dest(): AOU | null;
    prev_dest(value: AOU | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
}

export interface AIHU extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item(): ACP | null;
    item(value: ACP | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    use_time(): string | null;
    use_time(value: string | null): void;
}

export interface AIIT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    prorate(): boolean | null;
    prorate(value: boolean | null): void;
    blanket(): boolean | null;
    blanket(value: boolean | null): void;
}

export interface ALCI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    inventory_date(): string | null;
    inventory_date(value: string | null): void;
    inventory_workstation(): AWS | null;
    inventory_workstation(value: AWS | null): void;
    copy(): ACP | null;
    copy(value: ACP | null): void;
}

export interface ALHR extends IdlObject {
    status(): string | null;
    status(value: string | null): void;
    transit(): AHTC | null;
    transit(value: AHTC | null): void;
    capture_time(): string | null;
    capture_time(value: string | null): void;
    current_copy(): ACP | null;
    current_copy(value: ACP | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    expire_time(): string | null;
    expire_time(value: string | null): void;
    fulfillment_lib(): AOU | null;
    fulfillment_lib(value: AOU | null): void;
    fulfillment_staff(): AU | null;
    fulfillment_staff(value: AU | null): void;
    fulfillment_time(): string | null;
    fulfillment_time(value: string | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    phone_notify(): string | null;
    phone_notify(value: string | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    prev_check_time(): string | null;
    prev_check_time(value: string | null): void;
    request_lib(): AOU | null;
    request_lib(value: AOU | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    requestor(): AU | null;
    requestor(value: AU | null): void;
    selection_depth(): string | null;
    selection_depth(value: string | null): void;
    selection_ou(): AOU | null;
    selection_ou(value: AOU | null): void;
    target(): any;
    target(value: any): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    notify_time(): string | null;
    notify_time(value: string | null): void;
    notify_count(): number | null;
    notify_count(value: number | null): void;
    notifications(): AHN | null;
    notifications(value: AHN | null): void;
    bib_rec(): RHRR | null;
    bib_rec(value: RHRR | null): void;
    eligible_copies(): AHCM | null;
    eligible_copies(value: AHCM | null): void;
    frozen(): boolean | null;
    frozen(value: boolean | null): void;
    thaw_date(): string | null;
    thaw_date(value: string | null): void;
    shelf_time(): string | null;
    shelf_time(value: string | null): void;
    cancel_cause(): AHRCC | null;
    cancel_cause(value: AHRCC | null): void;
    cancel_note(): string | null;
    cancel_note(value: string | null): void;
    cut_in_line(): boolean | null;
    cut_in_line(value: boolean | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    shelf_expire_time(): string | null;
    shelf_expire_time(value: string | null): void;
    notes(): AHRN | null;
    notes(value: AHRN | null): void;
    current_shelf_lib(): AOU | null;
    current_shelf_lib(value: AOU | null): void;
    behind_desk(): boolean | null;
    behind_desk(value: boolean | null): void;
    acq_request(): AUR | null;
    acq_request(value: AUR | null): void;
    hopeless_date(): string | null;
    hopeless_date(value: string | null): void;
}

export interface AMTR extends IdlObject {
    matchpoint(): CCMM | null;
    matchpoint(value: CCMM | null): void;
    success(): boolean | null;
    success(value: boolean | null): void;
    fail_part(): string | null;
    fail_part(value: string | null): void;
}

export interface ANCC extends IdlObject {
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_time(): string | null;
    circ_time(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    item_type(): CNCT | null;
    item_type(value: CNCT | null): void;
    patron(): AU | null;
    patron(value: AU | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    duedate(): string | null;
    duedate(value: string | null): void;
}

export interface ANCIHU extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item_type(): CNCT | null;
    item_type(value: CNCT | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    use_time(): string | null;
    use_time(value: string | null): void;
}

export interface AOA extends IdlObject {
    address_type(): string | null;
    address_type(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    valid(): boolean | null;
    valid(value: boolean | null): void;
    san(): string | null;
    san(value: string | null): void;
    latitude(): number | null;
    latitude(value: number | null): void;
    longitude(): number | null;
    longitude(value: number | null): void;
}

export interface AOC extends IdlObject {
    checkin_lib(): any;
    checkin_lib(value: any): void;
    checkin_staff(): any;
    checkin_staff(value: any): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    circ_lib(): number | null;
    circ_lib(value: number | null): void;
    circ_staff(): any;
    circ_staff(value: any): void;
    desk_renewal(): boolean | null;
    desk_renewal(value: boolean | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    opac_renewal(): boolean | null;
    opac_renewal(value: boolean | null): void;
    phone_renewal(): boolean | null;
    phone_renewal(value: boolean | null): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    target_copy(): any;
    target_copy(value: any): void;
    usr(): any;
    usr(value: any): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    circulation(): CIRC | null;
    circulation(value: CIRC | null): void;
    auto_renewal(): boolean | null;
    auto_renewal(value: boolean | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
}

export interface AONCC extends IdlObject {
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_time(): string | null;
    circ_time(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    item_type(): CNCT | null;
    item_type(value: CNCT | null): void;
    patron(): AU | null;
    patron(value: AU | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    duedate(): string | null;
    duedate(value: string | null): void;
}

export interface AOU extends IdlObject {
    children(): AOU | null;
    children(value: AOU | null): void;
    billing_address(): AOA | null;
    billing_address(value: AOA | null): void;
    holds_address(): AOA | null;
    holds_address(value: AOA | null): void;
    id(): number | null;
    id(value: number | null): void;
    ill_address(): AOA | null;
    ill_address(value: AOA | null): void;
    mailing_address(): AOA | null;
    mailing_address(value: AOA | null): void;
    name(): string | null;
    name(value: string | null): void;
    ou_type(): AOUT | null;
    ou_type(value: AOUT | null): void;
    parent_ou(): AOU | null;
    parent_ou(value: AOU | null): void;
    shortname(): string | null;
    shortname(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    phone(): string | null;
    phone(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    fiscal_calendar(): ACQFC | null;
    fiscal_calendar(value: ACQFC | null): void;
    users(): AU | null;
    users(value: AU | null): void;
    closed_dates(): AOUCD | null;
    closed_dates(value: AOUCD | null): void;
    circulations(): CIRC | null;
    circulations(value: CIRC | null): void;
    settings(): AOUS | null;
    settings(value: AOUS | null): void;
    addresses(): AOA | null;
    addresses(value: AOA | null): void;
    checkins(): CIRC | null;
    checkins(value: CIRC | null): void;
    workstations(): AWS | null;
    workstations(value: AWS | null): void;
    fund_alloc_pcts(): ACQFAP | null;
    fund_alloc_pcts(value: ACQFAP | null): void;
    copy_location_orders(): ACPLO | null;
    copy_location_orders(value: ACPLO | null): void;
    atc_prev_dests(): ATC | null;
    atc_prev_dests(value: ATC | null): void;
    resv_requests(): BRESV | null;
    resv_requests(value: BRESV | null): void;
    resv_pickups(): BRESV | null;
    resv_pickups(value: BRESV | null): void;
    rsrc_types(): BRT | null;
    rsrc_types(value: BRT | null): void;
    resources(): BRSRC | null;
    resources(value: BRSRC | null): void;
    rsrc_attrs(): BRA | null;
    rsrc_attrs(value: BRA | null): void;
    attr_vals(): BRAV | null;
    attr_vals(value: BRAV | null): void;
    hours_of_operation(): AOUHOO | null;
    hours_of_operation(value: AOUHOO | null): void;
}

export interface AOUCD extends IdlObject {
    close_end(): string | null;
    close_end(value: string | null): void;
    close_start(): string | null;
    close_start(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    reason(): string | null;
    reason(value: string | null): void;
    full_day(): boolean | null;
    full_day(value: boolean | null): void;
    multi_day(): boolean | null;
    multi_day(value: boolean | null): void;
    emergency_closing(): AEC | null;
    emergency_closing(value: AEC | null): void;
}

export interface AOUCT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    purpose(): string | null;
    purpose(value: string | null): void;
}

export interface AOUCTN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    tree(): AOUCT | null;
    tree(value: AOUCT | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    parent_node(): AOUCTN | null;
    parent_node(value: AOUCTN | null): void;
    sibling_order(): number | null;
    sibling_order(value: number | null): void;
    children(): AOUCTN | null;
    children(value: AOUCTN | null): void;
}

export interface AOUHOO extends IdlObject {
    dow_0_close(): string | null;
    dow_0_close(value: string | null): void;
    dow_0_open(): string | null;
    dow_0_open(value: string | null): void;
    dow_0_note(): string | null;
    dow_0_note(value: string | null): void;
    dow_1_close(): string | null;
    dow_1_close(value: string | null): void;
    dow_1_open(): string | null;
    dow_1_open(value: string | null): void;
    dow_1_note(): string | null;
    dow_1_note(value: string | null): void;
    dow_2_close(): string | null;
    dow_2_close(value: string | null): void;
    dow_2_open(): string | null;
    dow_2_open(value: string | null): void;
    dow_2_note(): string | null;
    dow_2_note(value: string | null): void;
    dow_3_close(): string | null;
    dow_3_close(value: string | null): void;
    dow_3_open(): string | null;
    dow_3_open(value: string | null): void;
    dow_3_note(): string | null;
    dow_3_note(value: string | null): void;
    dow_4_close(): string | null;
    dow_4_close(value: string | null): void;
    dow_4_open(): string | null;
    dow_4_open(value: string | null): void;
    dow_4_note(): string | null;
    dow_4_note(value: string | null): void;
    dow_5_close(): string | null;
    dow_5_close(value: string | null): void;
    dow_5_open(): string | null;
    dow_5_open(value: string | null): void;
    dow_5_note(): string | null;
    dow_5_note(value: string | null): void;
    dow_6_close(): string | null;
    dow_6_close(value: string | null): void;
    dow_6_open(): string | null;
    dow_6_open(value: string | null): void;
    dow_6_note(): string | null;
    dow_6_note(value: string | null): void;
    id(): AOU | null;
    id(value: AOU | null): void;
    org_unit(): number | null;
    org_unit(value: number | null): void;
}

export interface AOUP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    from_org(): AOU | null;
    from_org(value: AOU | null): void;
    to_org(): AOU | null;
    to_org(value: AOU | null): void;
    prox(): number | null;
    prox(value: number | null): void;
}

export interface AOUPA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item_circ_lib(): AOU | null;
    item_circ_lib(value: AOU | null): void;
    item_owning_lib(): AOU | null;
    item_owning_lib(value: AOU | null): void;
    hold_pickup_lib(): AOU | null;
    hold_pickup_lib(value: AOU | null): void;
    hold_request_lib(): AOU | null;
    hold_request_lib(value: AOU | null): void;
    copy_location(): ACPL | null;
    copy_location(value: ACPL | null): void;
    circ_mod(): CCM | null;
    circ_mod(value: CCM | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    absolute_adjustment(): boolean | null;
    absolute_adjustment(value: boolean | null): void;
    prox_adjustment(): any;
    prox_adjustment(value: any): void;
}

export interface AOUS extends IdlObject {
    id(): string | null;
    id(value: string | null): void;
    name(): COUST | null;
    name(value: COUST | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface AOUT extends IdlObject {
    children(): AOUT | null;
    children(value: AOUT | null): void;
    can_have_users(): boolean | null;
    can_have_users(value: boolean | null): void;
    can_have_vols(): boolean | null;
    can_have_vols(value: boolean | null): void;
    depth(): number | null;
    depth(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac_label(): string | null;
    opac_label(value: string | null): void;
    parent(): AOUT | null;
    parent(value: AOUT | null): void;
    org_units(): AOU | null;
    org_units(value: AOU | null): void;
}

export interface APLL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    session(): any;
    session(value: any): void;
    event(): string | null;
    event(value: string | null): void;
    record_count(): any;
    record_count(value: any): void;
    logtime(): string | null;
    logtime(value: string | null): void;
}

export interface ARD extends IdlObject {
    char_encoding(): string | null;
    char_encoding(value: string | null): void;
    id(): string | null;
    id(value: string | null): void;
    record(): ARE | null;
    record(value: ARE | null): void;
    record_status(): string | null;
    record_status(value: string | null): void;
    thesaurus(): AT | null;
    thesaurus(value: AT | null): void;
}

export interface ARE extends IdlObject {
    active(): boolean | null;
    active(value: boolean | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    id(): number | null;
    id(value: number | null): void;
    last_xact_id(): string | null;
    last_xact_id(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    source(): string | null;
    source(value: string | null): void;
    control_set(): ACS | null;
    control_set(value: ACS | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    heading(): string | null;
    heading(value: string | null): void;
    simple_heading(): string | null;
    simple_heading(value: string | null): void;
    fixed_fields(): ARD | null;
    fixed_fields(value: ARD | null): void;
    notes(): ARN | null;
    notes(value: ARN | null): void;
    bib_links(): ABL | null;
    bib_links(value: ABL | null): void;
}

export interface ARN extends IdlObject {
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): any;
    creator(value: any): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): any;
    editor(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    record(): ARE | null;
    record(value: ARE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface ARTC extends IdlObject {
    copy_status(): CCS | null;
    copy_status(value: CCS | null): void;
    dest(): AOU | null;
    dest(value: AOU | null): void;
    dest_recv_time(): string | null;
    dest_recv_time(value: string | null): void;
    reservation(): BRESV | null;
    reservation(value: BRESV | null): void;
    id(): number | null;
    id(value: number | null): void;
    persistant_transfer(): boolean | null;
    persistant_transfer(value: boolean | null): void;
    prev_hop(): any;
    prev_hop(value: any): void;
    source(): AOU | null;
    source(value: AOU | null): void;
    source_send_time(): string | null;
    source_send_time(value: string | null): void;
    target_copy(): BRSRC | null;
    target_copy(value: BRSRC | null): void;
    transit_copy(): ATC | null;
    transit_copy(value: ATC | null): void;
    prev_dest(): AOU | null;
    prev_dest(value: AOU | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
}

export interface ASC extends IdlObject {
    entries(): ASCE | null;
    entries(value: ASCE | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    sip_field(): ASCSF | null;
    sip_field(value: ASCSF | null): void;
    sip_format(): string | null;
    sip_format(value: string | null): void;
    required(): boolean | null;
    required(value: boolean | null): void;
    checkout_archive(): boolean | null;
    checkout_archive(value: boolean | null): void;
}

export interface ASCE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    stat_cat(): ASC | null;
    stat_cat(value: ASC | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface ASCECM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owning_copy(): ACP | null;
    owning_copy(value: ACP | null): void;
    stat_cat(): ASC | null;
    stat_cat(value: ASC | null): void;
    stat_cat_entry(): ASCE | null;
    stat_cat_entry(value: ASCE | null): void;
}

export interface ASCSF extends IdlObject {
    field(): string | null;
    field(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    one_only(): boolean | null;
    one_only(value: boolean | null): void;
}

export interface ASFG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    code(): string | null;
    code(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    entries(): ASFGE | null;
    entries(value: ASFGE | null): void;
}

export interface ASFGE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    grp(): ASFG | null;
    grp(value: ASFG | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    query(): ASQ | null;
    query(value: ASQ | null): void;
}

export interface ASH extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    record(): ARE | null;
    record(value: ARE | null): void;
    atag(): ACSAF | null;
    atag(value: ACSAF | null): void;
    value(): string | null;
    value(value: string | null): void;
    thesaurus(): string | null;
    thesaurus(value: string | null): void;
}

export interface ASQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    query_text(): string | null;
    query_text(value: string | null): void;
}

export interface ASV extends IdlObject {
    questions(): ASVQ | null;
    questions(value: ASVQ | null): void;
    responses(): ASVR | null;
    responses(value: ASVR | null): void;
    description(): string | null;
    description(value: string | null): void;
    end_date(): string | null;
    end_date(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac(): boolean | null;
    opac(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    poll(): boolean | null;
    poll(value: boolean | null): void;
    required(): boolean | null;
    required(value: boolean | null): void;
    start_date(): string | null;
    start_date(value: string | null): void;
    usr_summary(): boolean | null;
    usr_summary(value: boolean | null): void;
}

export interface ASVA extends IdlObject {
    responses(): ASVR | null;
    responses(value: ASVR | null): void;
    answer(): string | null;
    answer(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    question(): ASVQ | null;
    question(value: ASVQ | null): void;
}

export interface ASVQ extends IdlObject {
    answers(): ASVA | null;
    answers(value: ASVA | null): void;
    responses(): ASVR | null;
    responses(value: ASVR | null): void;
    id(): number | null;
    id(value: number | null): void;
    question(): string | null;
    question(value: string | null): void;
    survey(): ASV | null;
    survey(value: ASV | null): void;
}

export interface ASVR extends IdlObject {
    answer(): ASVA | null;
    answer(value: ASVA | null): void;
    answer_date(): string | null;
    answer_date(value: string | null): void;
    effective_date(): string | null;
    effective_date(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    question(): ASVQ | null;
    question(value: ASVQ | null): void;
    response_group_id(): number | null;
    response_group_id(value: number | null): void;
    survey(): ASV | null;
    survey(value: ASV | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface AT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    control_set(): ACS | null;
    control_set(value: ACS | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    short_code(): string | null;
    short_code(value: string | null): void;
    uri(): string | null;
    uri(value: string | null): void;
}

export interface ATB extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    ws(): AWS | null;
    ws(value: AWS | null): void;
    label(): string | null;
    label(value: string | null): void;
    layout(): string | null;
    layout(value: string | null): void;
}

export interface ATC extends IdlObject {
    copy_status(): CCS | null;
    copy_status(value: CCS | null): void;
    dest(): AOU | null;
    dest(value: AOU | null): void;
    dest_recv_time(): string | null;
    dest_recv_time(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    persistant_transfer(): boolean | null;
    persistant_transfer(value: boolean | null): void;
    prev_hop(): any;
    prev_hop(value: any): void;
    source(): AOU | null;
    source(value: AOU | null): void;
    prev_dest(): AOU | null;
    prev_dest(value: AOU | null): void;
    source_send_time(): string | null;
    source_send_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    hold_transit_copy(): AHTC | null;
    hold_transit_copy(value: AHTC | null): void;
}

export interface ATCLEAN extends IdlObject {
    module(): string | null;
    module(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface ATCOL extends IdlObject {
    module(): string | null;
    module(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface ATENV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    event_def(): ATEVDEF | null;
    event_def(value: ATEVDEF | null): void;
    path(): string | null;
    path(value: string | null): void;
    collector(): ATCOL | null;
    collector(value: ATCOL | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface ATEO extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    data(): string | null;
    data(value: string | null): void;
    is_error(): boolean | null;
    is_error(value: boolean | null): void;
    events(): ATEV | null;
    events(value: ATEV | null): void;
    error_events(): ATEV | null;
    error_events(value: ATEV | null): void;
    locale(): string | null;
    locale(value: string | null): void;
}

export interface ATEV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    target(): number | null;
    target(value: number | null): void;
    event_def(): ATEVDEF | null;
    event_def(value: ATEVDEF | null): void;
    add_time(): string | null;
    add_time(value: string | null): void;
    run_time(): string | null;
    run_time(value: string | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    update_time(): string | null;
    update_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    user_data(): string | null;
    user_data(value: string | null): void;
    template_output(): ATEO | null;
    template_output(value: ATEO | null): void;
    error_output(): ATEO | null;
    error_output(value: ATEO | null): void;
    async_output(): ATEO | null;
    async_output(value: ATEO | null): void;
    update_process(): number | null;
    update_process(value: number | null): void;
    context_user(): AU | null;
    context_user(value: AU | null): void;
    context_library(): AOU | null;
    context_library(value: AOU | null): void;
    context_bib(): BRE | null;
    context_bib(value: BRE | null): void;
    context_item(): ACP | null;
    context_item(value: ACP | null): void;
}

export interface ATEVALT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    template(): string | null;
    template(value: string | null): void;
    locale(): I18N_L | null;
    locale(value: I18N_L | null): void;
    message_title(): string | null;
    message_title(value: string | null): void;
    message_template(): string | null;
    message_template(value: string | null): void;
    event_def(): ATEVDEF | null;
    event_def(value: ATEVDEF | null): void;
}

export interface ATEVDEF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    hook(): ATH | null;
    hook(value: ATH | null): void;
    validator(): ATVAL | null;
    validator(value: ATVAL | null): void;
    reactor(): ATREACT | null;
    reactor(value: ATREACT | null): void;
    cleanup_success(): ATCLEAN | null;
    cleanup_success(value: ATCLEAN | null): void;
    cleanup_failure(): ATCLEAN | null;
    cleanup_failure(value: ATCLEAN | null): void;
    delay(): any;
    delay(value: any): void;
    max_delay(): any;
    max_delay(value: any): void;
    delay_field(): string | null;
    delay_field(value: string | null): void;
    group_field(): string | null;
    group_field(value: string | null): void;
    template(): string | null;
    template(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    granularity(): string | null;
    granularity(value: string | null): void;
    usr_field(): string | null;
    usr_field(value: string | null): void;
    opt_in_setting(): CUST | null;
    opt_in_setting(value: CUST | null): void;
    repeat_delay(): any;
    repeat_delay(value: any): void;
    message_template(): string | null;
    message_template(value: string | null): void;
    message_title(): string | null;
    message_title(value: string | null): void;
    message_usr_path(): string | null;
    message_usr_path(value: string | null): void;
    message_library_path(): string | null;
    message_library_path(value: string | null): void;
    env(): ATENV | null;
    env(value: ATENV | null): void;
    params(): ATEVPARAM | null;
    params(value: ATEVPARAM | null): void;
    retention_interval(): any;
    retention_interval(value: any): void;
    context_usr_path(): string | null;
    context_usr_path(value: string | null): void;
    context_library_path(): string | null;
    context_library_path(value: string | null): void;
    context_bib_path(): string | null;
    context_bib_path(value: string | null): void;
    context_item_path(): string | null;
    context_item_path(value: string | null): void;
}

export interface ATEVDEFG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    hook(): ATH | null;
    hook(value: ATH | null): void;
    name(): string | null;
    name(value: string | null): void;
    members(): ATEVDEFGM | null;
    members(value: ATEVDEFGM | null): void;
}

export interface ATEVDEFGM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    grp(): ATEVDEFG | null;
    grp(value: ATEVDEFG | null): void;
    event_def(): ATEVDEF | null;
    event_def(value: ATEVDEF | null): void;
    sortable(): boolean | null;
    sortable(value: boolean | null): void;
    holdings(): boolean | null;
    holdings(value: boolean | null): void;
    external(): boolean | null;
    external(value: boolean | null): void;
}

export interface ATEVPARAM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    event_def(): ATEVDEF | null;
    event_def(value: ATEVDEF | null): void;
    param(): string | null;
    param(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface ATH extends IdlObject {
    key(): string | null;
    key(value: string | null): void;
    core_type(): string | null;
    core_type(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    passive(): boolean | null;
    passive(value: boolean | null): void;
}

export interface ATOUL extends IdlObject {
    hook(): ATH | null;
    hook(value: ATH | null): void;
    name(): string | null;
    name(value: string | null): void;
    reactor(): string | null;
    reactor(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    event_def(): number | null;
    event_def(value: number | null): void;
    add_time(): string | null;
    add_time(value: string | null): void;
    run_time(): string | null;
    run_time(value: string | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    update_time(): string | null;
    update_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    update_process(): number | null;
    update_process(value: number | null): void;
    state(): string | null;
    state(value: string | null): void;
    user_data(): string | null;
    user_data(value: string | null): void;
    template_output(): ATEO | null;
    template_output(value: ATEO | null): void;
    error_output(): ATEO | null;
    error_output(value: ATEO | null): void;
    async_output(): ATEO | null;
    async_output(value: ATEO | null): void;
    target(): any;
    target(value: any): void;
    target_circ(): CIRC | null;
    target_circ(value: CIRC | null): void;
    target_hold(): AHR | null;
    target_hold(value: AHR | null): void;
    context_user(): AU | null;
    context_user(value: AU | null): void;
    context_library(): AOU | null;
    context_library(value: AOU | null): void;
    context_bib(): BRE | null;
    context_bib(value: BRE | null): void;
    context_item(): ACP | null;
    context_item(value: ACP | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
}

export interface ATREACT extends IdlObject {
    module(): string | null;
    module(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface ATUL extends IdlObject {
    hook(): ATH | null;
    hook(value: ATH | null): void;
    name(): string | null;
    name(value: string | null): void;
    reactor(): string | null;
    reactor(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    event_def(): number | null;
    event_def(value: number | null): void;
    add_time(): string | null;
    add_time(value: string | null): void;
    run_time(): string | null;
    run_time(value: string | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    update_time(): string | null;
    update_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    update_process(): number | null;
    update_process(value: number | null): void;
    state(): string | null;
    state(value: string | null): void;
    user_data(): string | null;
    user_data(value: string | null): void;
    template_output(): ATEO | null;
    template_output(value: ATEO | null): void;
    error_output(): ATEO | null;
    error_output(value: ATEO | null): void;
    async_output(): ATEO | null;
    async_output(value: ATEO | null): void;
    target_circ(): CIRC | null;
    target_circ(value: CIRC | null): void;
    target_hold(): AHR | null;
    target_hold(value: AHR | null): void;
    perm_lib(): AOU | null;
    perm_lib(value: AOU | null): void;
}

export interface ATVAL extends IdlObject {
    module(): string | null;
    module(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface AU extends IdlObject {
    addresses(): AUA | null;
    addresses(value: AUA | null): void;
    cards(): AC | null;
    cards(value: AC | null): void;
    checkouts(): CIRC | null;
    checkouts(value: CIRC | null): void;
    hold_requests(): AHR | null;
    hold_requests(value: AHR | null): void;
    permissions(): PUPM | null;
    permissions(value: PUPM | null): void;
    settings(): AUS | null;
    settings(value: AUS | null): void;
    standing_penalties(): AUSP | null;
    standing_penalties(value: AUSP | null): void;
    stat_cat_entries(): ACTSCECM | null;
    stat_cat_entries(value: ACTSCECM | null): void;
    survey_responses(): ASVR | null;
    survey_responses(value: ASVR | null): void;
    waiver_entries(): AUPW | null;
    waiver_entries(value: AUPW | null): void;
    ws_ou(): any;
    ws_ou(value: any): void;
    wsid(): any;
    wsid(value: any): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    barred(): boolean | null;
    barred(value: boolean | null): void;
    billing_address(): AUA | null;
    billing_address(value: AUA | null): void;
    card(): AC | null;
    card(value: AC | null): void;
    claims_returned_count(): number | null;
    claims_returned_count(value: number | null): void;
    claims_never_checked_out_count(): number | null;
    claims_never_checked_out_count(value: number | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    credit_forward_balance(): number | null;
    credit_forward_balance(value: number | null): void;
    day_phone(): string | null;
    day_phone(value: string | null): void;
    dob(): string | null;
    dob(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    evening_phone(): string | null;
    evening_phone(value: string | null): void;
    expire_date(): string | null;
    expire_date(value: string | null): void;
    family_name(): string | null;
    family_name(value: string | null): void;
    first_given_name(): string | null;
    first_given_name(value: string | null): void;
    home_ou(): AOU | null;
    home_ou(value: AOU | null): void;
    id(): number | null;
    id(value: number | null): void;
    ident_type(): CIT | null;
    ident_type(value: CIT | null): void;
    ident_type2(): CIT | null;
    ident_type2(value: CIT | null): void;
    ident_value(): string | null;
    ident_value(value: string | null): void;
    ident_value2(): string | null;
    ident_value2(value: string | null): void;
    last_xact_id(): string | null;
    last_xact_id(value: string | null): void;
    mailing_address(): AUA | null;
    mailing_address(value: AUA | null): void;
    master_account(): boolean | null;
    master_account(value: boolean | null): void;
    net_access_level(): CNAL | null;
    net_access_level(value: CNAL | null): void;
    other_phone(): string | null;
    other_phone(value: string | null): void;
    passwd(): string | null;
    passwd(value: string | null): void;
    photo_url(): string | null;
    photo_url(value: string | null): void;
    prefix(): string | null;
    prefix(value: string | null): void;
    profile(): PGT | null;
    profile(value: PGT | null): void;
    second_given_name(): string | null;
    second_given_name(value: string | null): void;
    standing(): CST | null;
    standing(value: CST | null): void;
    suffix(): string | null;
    suffix(value: string | null): void;
    super_user(): boolean | null;
    super_user(value: boolean | null): void;
    usrgroup(): AU | null;
    usrgroup(value: AU | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    alias(): string | null;
    alias(value: string | null): void;
    juvenile(): boolean | null;
    juvenile(value: boolean | null): void;
    last_update_time(): string | null;
    last_update_time(value: string | null): void;
    pref_prefix(): string | null;
    pref_prefix(value: string | null): void;
    pref_first_given_name(): string | null;
    pref_first_given_name(value: string | null): void;
    pref_second_given_name(): string | null;
    pref_second_given_name(value: string | null): void;
    pref_family_name(): string | null;
    pref_family_name(value: string | null): void;
    pref_suffix(): string | null;
    pref_suffix(value: string | null): void;
    guardian(): string | null;
    guardian(value: string | null): void;
    name_keywords(): string | null;
    name_keywords(value: string | null): void;
    name_kw_tsvector(): string | null;
    name_kw_tsvector(value: string | null): void;
    groups(): PUGM | null;
    groups(value: PUGM | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    notes(): AUM | null;
    notes(value: AUM | null): void;
    demographic(): RUD | null;
    demographic(value: RUD | null): void;
    billable_transactions(): MBT | null;
    billable_transactions(value: MBT | null): void;
    money_summary(): MUS | null;
    money_summary(value: MUS | null): void;
    open_billable_transactions_summary(): MOBTS | null;
    open_billable_transactions_summary(value: MOBTS | null): void;
    checkins(): CIRC | null;
    checkins(value: CIRC | null): void;
    performed_circulations(): CIRC | null;
    performed_circulations(value: CIRC | null): void;
    fund_alloc_pcts(): ACQFAP | null;
    fund_alloc_pcts(value: ACQFAP | null): void;
    reservations(): BRESV | null;
    reservations(value: BRESV | null): void;
    usr_activity(): AUACT | null;
    usr_activity(value: AUACT | null): void;
    usr_work_ou_map(): PUWOUM | null;
    usr_work_ou_map(value: PUWOUM | null): void;
    locale(): I18N_L | null;
    locale(value: I18N_L | null): void;
}

export interface AUA extends IdlObject {
    address_type(): string | null;
    address_type(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    valid(): boolean | null;
    valid(value: boolean | null): void;
    within_city_limits(): boolean | null;
    within_city_limits(value: boolean | null): void;
    replaces(): AUA | null;
    replaces(value: AUA | null): void;
    pending(): boolean | null;
    pending(value: boolean | null): void;
}

export interface AUACT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    etype(): CUAT | null;
    etype(value: CUAT | null): void;
    event_time(): string | null;
    event_time(value: string | null): void;
    event_data(): string | null;
    event_data(value: string | null): void;
}

export interface AUCH extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    source_circ(): CIRC | null;
    source_circ(value: CIRC | null): void;
}

export interface AUFH extends IdlObject {
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    current_copy(): ACP | null;
    current_copy(value: ACP | null): void;
    fail_time(): string | null;
    fail_time(value: string | null): void;
    hold(): AHR | null;
    hold(value: AHR | null): void;
    id(): number | null;
    id(value: number | null): void;
}

export interface AUFHIL extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    count(): number | null;
    count(value: number | null): void;
}

export interface AUFHL extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    count(): number | null;
    count(value: number | null): void;
}

export interface AUFHML extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    min(): number | null;
    min(value: number | null): void;
}

export interface AUFHMXL extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    max(): number | null;
    max(value: number | null): void;
}

export interface AUFHOL extends IdlObject {
    hold(): AHR | null;
    hold(value: AHR | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    count(): number | null;
    count(value: number | null): void;
}

export interface AUM extends IdlObject {
    create_date(): string | null;
    create_date(value: string | null): void;
    read_date(): string | null;
    read_date(value: string | null): void;
    sending_lib(): AOU | null;
    sending_lib(value: AOU | null): void;
    id(): number | null;
    id(value: number | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    message(): string | null;
    message(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    stop_date(): string | null;
    stop_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
}

export interface AUMFM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    factor(): MFAF | null;
    factor(value: MFAF | null): void;
    purpose(): string | null;
    purpose(value: string | null): void;
    add_time(): string | null;
    add_time(value: string | null): void;
}

export interface AUML extends IdlObject {
    create_date(): string | null;
    create_date(value: string | null): void;
    read_date(): string | null;
    read_date(value: string | null): void;
    sending_lib(): AOU | null;
    sending_lib(value: AOU | null): void;
    id(): number | null;
    id(value: number | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    message(): string | null;
    message(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    stop_date(): string | null;
    stop_date(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
}

export interface AUMP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    ausp_set_date(): string | null;
    ausp_set_date(value: string | null): void;
    aum_create_date(): string | null;
    aum_create_date(value: string | null): void;
    read_date(): string | null;
    read_date(value: string | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    ausp_org_unit(): AOU | null;
    ausp_org_unit(value: AOU | null): void;
    aum_sending_lib(): AOU | null;
    aum_sending_lib(value: AOU | null): void;
    ausp_id(): AUSP | null;
    ausp_id(value: AUSP | null): void;
    aum_id(): AUM | null;
    aum_id(value: AUM | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    ausp_usr(): AU | null;
    ausp_usr(value: AU | null): void;
    aum_usr(): AU | null;
    aum_usr(value: AU | null): void;
    message(): string | null;
    message(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    stop_date(): string | null;
    stop_date(value: string | null): void;
    ausp_stop_date(): string | null;
    ausp_stop_date(value: string | null): void;
    aum_stop_date(): string | null;
    aum_stop_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    standing_penalty(): CSP | null;
    standing_penalty(value: CSP | null): void;
    ausp_usr_message(): AUM | null;
    ausp_usr_message(value: AUM | null): void;
}

export interface AUMX extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    ingress(): string | null;
    ingress(value: string | null): void;
}

export interface AUOI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    opt_in_ws(): AWS | null;
    opt_in_ws(value: AWS | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    opt_in_ts(): string | null;
    opt_in_ts(value: string | null): void;
}

export interface AUPR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    uuid(): string | null;
    uuid(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    has_been_reset(): boolean | null;
    has_been_reset(value: boolean | null): void;
}

export interface AUPW extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    name(): string | null;
    name(value: string | null): void;
    place_holds(): boolean | null;
    place_holds(value: boolean | null): void;
    pickup_holds(): boolean | null;
    pickup_holds(value: boolean | null): void;
    view_history(): boolean | null;
    view_history(value: boolean | null): void;
    checkout_items(): boolean | null;
    checkout_items(value: boolean | null): void;
}

export interface AUR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    request_type(): AURT | null;
    request_type(value: AURT | null): void;
    hold(): boolean | null;
    hold(value: boolean | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    phone_notify(): string | null;
    phone_notify(value: string | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    eg_bib(): BRE | null;
    eg_bib(value: BRE | null): void;
    request_date(): string | null;
    request_date(value: string | null): void;
    need_before(): string | null;
    need_before(value: string | null): void;
    max_fee(): string | null;
    max_fee(value: string | null): void;
    isxn(): string | null;
    isxn(value: string | null): void;
    upc(): string | null;
    upc(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    volume(): string | null;
    volume(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    article_title(): string | null;
    article_title(value: string | null): void;
    article_pages(): string | null;
    article_pages(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    location(): string | null;
    location(value: string | null): void;
    pubdate(): string | null;
    pubdate(value: string | null): void;
    mentioned(): string | null;
    mentioned(value: string | null): void;
    other_info(): string | null;
    other_info(value: string | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
}

export interface AURI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    href(): string | null;
    href(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    use_restriction(): string | null;
    use_restriction(value: string | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    call_number_maps(): AURICNM | null;
    call_number_maps(value: AURICNM | null): void;
    call_numbers(): AURICNM | null;
    call_numbers(value: AURICNM | null): void;
}

export interface AURICNM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    uri(): AURI | null;
    uri(value: AURI | null): void;
    call_number(): ACN | null;
    call_number(value: ACN | null): void;
}

export interface AURS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    request_type(): AURT | null;
    request_type(value: AURT | null): void;
    hold(): boolean | null;
    hold(value: boolean | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    phone_notify(): string | null;
    phone_notify(value: string | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    lineitem(): JUB | null;
    lineitem(value: JUB | null): void;
    eg_bib(): BRE | null;
    eg_bib(value: BRE | null): void;
    request_date(): string | null;
    request_date(value: string | null): void;
    need_before(): string | null;
    need_before(value: string | null): void;
    max_fee(): string | null;
    max_fee(value: string | null): void;
    isxn(): string | null;
    isxn(value: string | null): void;
    upc(): string | null;
    upc(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    volume(): string | null;
    volume(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    article_title(): string | null;
    article_title(value: string | null): void;
    article_pages(): string | null;
    article_pages(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    location(): string | null;
    location(value: string | null): void;
    pubdate(): string | null;
    pubdate(value: string | null): void;
    mentioned(): string | null;
    mentioned(value: string | null): void;
    other_info(): string | null;
    other_info(value: string | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    request_status(): AURST | null;
    request_status(value: AURST | null): void;
    home_ou(): AOU | null;
    home_ou(value: AOU | null): void;
}

export interface AURST extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface AURT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface AUS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): CUST | null;
    name(value: CUST | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface AUSP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    set_date(): string | null;
    set_date(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    staff(): AU | null;
    staff(value: AU | null): void;
    standing_penalty(): CSP | null;
    standing_penalty(value: CSP | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    stop_date(): string | null;
    stop_date(value: string | null): void;
    usr_message(): AUM | null;
    usr_message(value: AUM | null): void;
}

export interface AUSS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    name(): string | null;
    name(value: string | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    query_text(): string | null;
    query_text(value: string | null): void;
    query_type(): string | null;
    query_type(value: string | null): void;
    target(): string | null;
    target(value: string | null): void;
}

export interface AWS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    toolbars(): ATB | null;
    toolbars(value: ATB | null): void;
    circulations(): CIRC | null;
    circulations(value: CIRC | null): void;
}

export interface AWSS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): CWST | null;
    name(value: CWST | null): void;
    value(): string | null;
    value(value: string | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
}

export interface BMP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    label(): string | null;
    label(value: string | null): void;
    label_sortkey(): string | null;
    label_sortkey(value: string | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
}

export interface BMPC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    ptype(): CMPCTM | null;
    ptype(value: CMPCTM | null): void;
    subfield(): CMPCSM | null;
    subfield(value: CMPCSM | null): void;
    value(): CMPCVM | null;
    value(value: CMPCVM | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
}

export interface BPBCM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    peer_type(): BPT | null;
    peer_type(value: BPT | null): void;
    peer_record(): BRE | null;
    peer_record(value: BRE | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
}

export interface BPT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface BRA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    resource_type(): BRT | null;
    resource_type(value: BRT | null): void;
    required(): boolean | null;
    required(value: boolean | null): void;
    valid_values(): BRAV | null;
    valid_values(value: BRAV | null): void;
    attr_maps(): BRAM | null;
    attr_maps(value: BRAM | null): void;
}

export interface BRAM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    resource(): BRSRC | null;
    resource(value: BRSRC | null): void;
    resource_attr(): BRA | null;
    resource_attr(value: BRA | null): void;
    value(): BRAV | null;
    value(value: BRAV | null): void;
}

export interface BRAV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    attr(): BRA | null;
    attr(value: BRA | null): void;
    valid_value(): string | null;
    valid_value(value: string | null): void;
    attr_maps(): BRAM | null;
    attr_maps(value: BRAM | null): void;
    attr_val_maps(): BRAVM | null;
    attr_val_maps(value: BRAVM | null): void;
}

export interface BRAVM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    reservation(): BRESV | null;
    reservation(value: BRESV | null): void;
    attr_value(): BRAV | null;
    attr_value(value: BRAV | null): void;
}

export interface BRE extends IdlObject {
    call_numbers(): ACN | null;
    call_numbers(value: ACN | null): void;
    fixed_fields(): MRD | null;
    fixed_fields(value: MRD | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    fingerprint(): string | null;
    fingerprint(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    last_xact_id(): string | null;
    last_xact_id(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    source(): CBS | null;
    source(value: CBS | null): void;
    tcn_source(): string | null;
    tcn_source(value: string | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    share_depth(): number | null;
    share_depth(value: number | null): void;
    metarecord(): MMRSM | null;
    metarecord(value: MMRSM | null): void;
    language(): MRD | null;
    language(value: MRD | null): void;
    notes(): BREN | null;
    notes(value: BREN | null): void;
    keyword_field_entries(): MKFE | null;
    keyword_field_entries(value: MKFE | null): void;
    subject_field_entries(): MSFE | null;
    subject_field_entries(value: MSFE | null): void;
    title_field_entries(): MTFE | null;
    title_field_entries(value: MTFE | null): void;
    identifier_field_entries(): MIFE | null;
    identifier_field_entries(value: MIFE | null): void;
    author_field_entries(): MAFE | null;
    author_field_entries(value: MAFE | null): void;
    series_field_entries(): MSEFE | null;
    series_field_entries(value: MSEFE | null): void;
    full_record_entries(): MFR | null;
    full_record_entries(value: MFR | null): void;
    simple_record(): RMSR | null;
    simple_record(value: RMSR | null): void;
    authority_links(): ABL | null;
    authority_links(value: ABL | null): void;
    subscriptions(): SSUB | null;
    subscriptions(value: SSUB | null): void;
    attrs(): MRA | null;
    attrs(value: MRA | null): void;
    mattrs(): MRAF | null;
    mattrs(value: MRAF | null): void;
    display_entries(): MDE | null;
    display_entries(value: MDE | null): void;
    flat_display_entries(): MFDE | null;
    flat_display_entries(value: MFDE | null): void;
    compressed_display_entries(): MCDE | null;
    compressed_display_entries(value: MCDE | null): void;
    wide_display_entry(): MWDE | null;
    wide_display_entry(value: MWDE | null): void;
    merge_date(): string | null;
    merge_date(value: string | null): void;
    merged_to(): BRE | null;
    merged_to(value: BRE | null): void;
}

export interface BREN extends IdlObject {
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    id(): number | null;
    id(value: number | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
}

export interface BRESV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    unrecovered(): boolean | null;
    unrecovered(value: boolean | null): void;
    billings(): MB | null;
    billings(value: MB | null): void;
    payments(): MP | null;
    payments(value: MP | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    summary(): MBTS | null;
    summary(value: MBTS | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    end_time(): string | null;
    end_time(value: string | null): void;
    capture_time(): string | null;
    capture_time(value: string | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    pickup_time(): string | null;
    pickup_time(value: string | null): void;
    return_time(): string | null;
    return_time(value: string | null): void;
    booking_interval(): any;
    booking_interval(value: any): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    fine_amount(): number | null;
    fine_amount(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    target_resource_type(): BRT | null;
    target_resource_type(value: BRT | null): void;
    target_resource(): BRSRC | null;
    target_resource(value: BRSRC | null): void;
    current_resource(): BRSRC | null;
    current_resource(value: BRSRC | null): void;
    request_lib(): AOU | null;
    request_lib(value: AOU | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    capture_staff(): AU | null;
    capture_staff(value: AU | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    note(): string | null;
    note(value: string | null): void;
    attr_val_maps(): BRAVM | null;
    attr_val_maps(value: BRAVM | null): void;
}

export interface BRN extends IdlObject {
    id(): string | null;
    id(value: string | null): void;
    children(): string | null;
    children(value: string | null): void;
    owner_doc(): string | null;
    owner_doc(value: string | null): void;
    intra_doc_id(): string | null;
    intra_doc_id(value: string | null): void;
    parent_node(): string | null;
    parent_node(value: string | null): void;
    node_type(): string | null;
    node_type(value: string | null): void;
    namespace_uri(): string | null;
    namespace_uri(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface BRSRC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    type(): BRT | null;
    type(value: BRT | null): void;
    overbook(): boolean | null;
    overbook(value: boolean | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    user_fee(): number | null;
    user_fee(value: number | null): void;
    attr_maps(): BRAM | null;
    attr_maps(value: BRAM | null): void;
    tgt_rsrcs(): BRESV | null;
    tgt_rsrcs(value: BRESV | null): void;
    curr_rsrcs(): BRESV | null;
    curr_rsrcs(value: BRESV | null): void;
    catalog_item(): any;
    catalog_item(value: any): void;
}

export interface BRT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    fine_amount(): number | null;
    fine_amount(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    catalog_item(): boolean | null;
    catalog_item(value: boolean | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    transferable(): boolean | null;
    transferable(value: boolean | null): void;
    elbow_room(): any;
    elbow_room(value: any): void;
    resources(): BRSRC | null;
    resources(value: BRSRC | null): void;
    resource_attrs(): BRA | null;
    resource_attrs(value: BRA | null): void;
    tgt_rsrc_types(): BRESV | null;
    tgt_rsrc_types(value: BRESV | null): void;
}

export interface CAM extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CBC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    prefix(): string | null;
    prefix(value: string | null): void;
    suffix(): string | null;
    suffix(value: string | null): void;
    length(): number | null;
    length(value: number | null): void;
    padding(): string | null;
    padding(value: string | null): void;
    padding_end(): boolean | null;
    padding_end(value: boolean | null): void;
    asset(): boolean | null;
    asset(value: boolean | null): void;
    actor(): boolean | null;
    actor(value: boolean | null): void;
}

export interface CBFP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    format(): any;
    format(value: any): void;
    first_word(): boolean | null;
    first_word(value: boolean | null): void;
}

export interface CBHO extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    pprox(): number | null;
    pprox(value: number | null): void;
    hprox(): number | null;
    hprox(value: number | null): void;
    owning_lib_to_home_lib_prox(): number | null;
    owning_lib_to_home_lib_prox(value: number | null): void;
    aprox(): number | null;
    aprox(value: number | null): void;
    approx(): number | null;
    approx(value: number | null): void;
    priority(): number | null;
    priority(value: number | null): void;
    cut(): number | null;
    cut(value: number | null): void;
    depth(): number | null;
    depth(value: number | null): void;
    htime(): number | null;
    htime(value: number | null): void;
    rtime(): number | null;
    rtime(value: number | null): void;
    shtime(): number | null;
    shtime(value: number | null): void;
}

export interface CBLVL extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CBREB extends IdlObject {
    items(): CBREBI | null;
    items(value: CBREBI | null): void;
    btype(): string | null;
    btype(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    share_maps(): CBREBS | null;
    share_maps(value: CBREBS | null): void;
}

export interface CBREBI extends IdlObject {
    bucket(): CBREB | null;
    bucket(value: CBREB | null): void;
    id(): number | null;
    id(value: number | null): void;
    target_biblio_record_entry(): BRE | null;
    target_biblio_record_entry(value: BRE | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    notes(): CBREBIN | null;
    notes(value: CBREBIN | null): void;
}

export interface CBREBIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item(): CBREBI | null;
    item(value: CBREBI | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CBREBN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bucket(): CBREB | null;
    bucket(value: CBREB | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CBREBS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bucket(): CBREB | null;
    bucket(value: CBREB | null): void;
    share_org(): AOU | null;
    share_org(value: AOU | null): void;
}

export interface CBREBT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CBREBUF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bucket(): CBREB | null;
    bucket(value: CBREB | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    flag(): string | null;
    flag(value: string | null): void;
}

export interface CBS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    source(): string | null;
    source(value: string | null): void;
    transcendant(): boolean | null;
    transcendant(value: boolean | null): void;
    can_have_copies(): boolean | null;
    can_have_copies(value: boolean | null): void;
}

export interface CBT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    default_price(): number | null;
    default_price(value: number | null): void;
}

export interface CC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): CCT | null;
    type(value: CCT | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    bucket(): CBREB | null;
    bucket(value: CBREB | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    age_filter(): any;
    age_filter(value: any): void;
    owning_lib_filter(): string | null;
    owning_lib_filter(value: string | null): void;
    copy_location_filter(): string | null;
    copy_location_filter(value: string | null): void;
    last_refresh_time(): string | null;
    last_refresh_time(value: string | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    max_items(): number | null;
    max_items(value: number | null): void;
}

export interface CCAT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    scope_org(): AOU | null;
    scope_org(value: AOU | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    name(): string | null;
    name(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    event(): string | null;
    event(value: string | null): void;
    in_renew(): boolean | null;
    in_renew(value: boolean | null): void;
    at_circ(): boolean | null;
    at_circ(value: boolean | null): void;
    at_owning(): boolean | null;
    at_owning(value: boolean | null): void;
    invert_location(): boolean | null;
    invert_location(value: boolean | null): void;
    next_status(): string | null;
    next_status(value: string | null): void;
}

export interface CCB extends IdlObject {
    items(): CCBI | null;
    items(value: CCBI | null): void;
    btype(): string | null;
    btype(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface CCBI extends IdlObject {
    bucket(): CCB | null;
    bucket(value: CCB | null): void;
    id(): number | null;
    id(value: number | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    notes(): CCBIN | null;
    notes(value: CCBIN | null): void;
}

export interface CCBIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item(): CCBI | null;
    item(value: CCBI | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CCBN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bucket(): CCB | null;
    bucket(value: CCB | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CCLG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface CCLS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    items_out(): number | null;
    items_out(value: number | null): void;
    depth(): number | null;
    depth(value: number | null): void;
    global(): boolean | null;
    global(value: boolean | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface CCLSACPL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    limit_set(): CCLS | null;
    limit_set(value: CCLS | null): void;
    copy_loc(): ACPL | null;
    copy_loc(value: ACPL | null): void;
}

export interface CCLSCMM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    limit_set(): CCLS | null;
    limit_set(value: CCLS | null): void;
    circ_mod(): CCM | null;
    circ_mod(value: CCM | null): void;
}

export interface CCLSGM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    limit_set(): CCLS | null;
    limit_set(value: CCLS | null): void;
    limit_group(): CCLG | null;
    limit_group(value: CCLG | null): void;
    check_only(): boolean | null;
    check_only(value: boolean | null): void;
}

export interface CCM extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    sip2_media_type(): string | null;
    sip2_media_type(value: string | null): void;
    magnetic_media(): boolean | null;
    magnetic_media(value: boolean | null): void;
    avg_wait_time(): any;
    avg_wait_time(value: any): void;
}

export interface CCMLSM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    matchpoint(): CCMM | null;
    matchpoint(value: CCMM | null): void;
    limit_set(): CCLS | null;
    limit_set(value: CCLS | null): void;
    fallthrough(): boolean | null;
    fallthrough(value: boolean | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
}

export interface CCMM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    is_renewal(): boolean | null;
    is_renewal(value: boolean | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    copy_circ_lib(): AOU | null;
    copy_circ_lib(value: AOU | null): void;
    copy_owning_lib(): AOU | null;
    copy_owning_lib(value: AOU | null): void;
    user_home_ou(): AOU | null;
    user_home_ou(value: AOU | null): void;
    grp(): PGT | null;
    grp(value: PGT | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    copy_location(): ACPL | null;
    copy_location(value: ACPL | null): void;
    marc_type(): CITM | null;
    marc_type(value: CITM | null): void;
    marc_form(): CIFM | null;
    marc_form(value: CIFM | null): void;
    marc_bib_level(): CBLVL | null;
    marc_bib_level(value: CBLVL | null): void;
    marc_vr_format(): CVRFM | null;
    marc_vr_format(value: CVRFM | null): void;
    ref_flag(): boolean | null;
    ref_flag(value: boolean | null): void;
    juvenile_flag(): boolean | null;
    juvenile_flag(value: boolean | null): void;
    usr_age_lower_bound(): string | null;
    usr_age_lower_bound(value: string | null): void;
    usr_age_upper_bound(): string | null;
    usr_age_upper_bound(value: string | null): void;
    item_age(): string | null;
    item_age(value: string | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    hard_due_date(): CHDD | null;
    hard_due_date(value: CHDD | null): void;
    renewals(): number | null;
    renewals(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    script_test(): string | null;
    script_test(value: string | null): void;
    total_copy_hold_ratio(): number | null;
    total_copy_hold_ratio(value: number | null): void;
    available_copy_hold_ratio(): number | null;
    available_copy_hold_ratio(value: number | null): void;
    description(): string | null;
    description(value: string | null): void;
    renew_extends_due_date(): boolean | null;
    renew_extends_due_date(value: boolean | null): void;
    renew_extend_min_interval(): any;
    renew_extend_min_interval(value: any): void;
}

export interface CCMW extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    is_renewal(): number | null;
    is_renewal(value: number | null): void;
    org_unit(): number | null;
    org_unit(value: number | null): void;
    copy_circ_lib(): number | null;
    copy_circ_lib(value: number | null): void;
    copy_owning_lib(): number | null;
    copy_owning_lib(value: number | null): void;
    user_home_ou(): number | null;
    user_home_ou(value: number | null): void;
    grp(): number | null;
    grp(value: number | null): void;
    circ_modifier(): number | null;
    circ_modifier(value: number | null): void;
    copy_location(): number | null;
    copy_location(value: number | null): void;
    marc_type(): number | null;
    marc_type(value: number | null): void;
    marc_form(): number | null;
    marc_form(value: number | null): void;
    marc_bib_level(): number | null;
    marc_bib_level(value: number | null): void;
    marc_vr_format(): number | null;
    marc_vr_format(value: number | null): void;
    ref_flag(): number | null;
    ref_flag(value: number | null): void;
    juvenile_flag(): number | null;
    juvenile_flag(value: number | null): void;
    usr_age_lower_bound(): number | null;
    usr_age_lower_bound(value: number | null): void;
    usr_age_upper_bound(): number | null;
    usr_age_upper_bound(value: number | null): void;
    item_age(): number | null;
    item_age(value: number | null): void;
}

export interface CCNB extends IdlObject {
    items(): CCNBI | null;
    items(value: CCNBI | null): void;
    btype(): string | null;
    btype(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface CCNBI extends IdlObject {
    bucket(): CCNB | null;
    bucket(value: CCNB | null): void;
    id(): number | null;
    id(value: number | null): void;
    target_call_number(): ACN | null;
    target_call_number(value: ACN | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    notes(): CCNBIN | null;
    notes(value: CCNBIN | null): void;
}

export interface CCNBIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item(): CCNBI | null;
    item(value: CCNBI | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CCNBN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bucket(): CCNB | null;
    bucket(value: CCNB | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CCNBT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CCOU extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    carousel(): CC | null;
    carousel(value: CC | null): void;
    override_name(): string | null;
    override_name(value: string | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    seq(): number | null;
    seq(value: number | null): void;
}

export interface CCPBT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CCRAED extends IdlObject {
    coded_value(): CCVM | null;
    coded_value(value: CCVM | null): void;
    definition(): string | null;
    definition(value: string | null): void;
}

export interface CCS extends IdlObject {
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    copy_active(): boolean | null;
    copy_active(value: boolean | null): void;
    restrict_copy_delete(): boolean | null;
    restrict_copy_delete(value: boolean | null): void;
    is_available(): boolean | null;
    is_available(value: boolean | null): void;
    hopeless_prone(): boolean | null;
    hopeless_prone(value: boolean | null): void;
}

export interface CCT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    automatic(): boolean | null;
    automatic(value: boolean | null): void;
    filter_by_age(): boolean | null;
    filter_by_age(value: boolean | null): void;
    filter_by_copy_owning_lib(): boolean | null;
    filter_by_copy_owning_lib(value: boolean | null): void;
    filter_by_copy_location(): boolean | null;
    filter_by_copy_location(value: boolean | null): void;
}

export interface CCTT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
}

export interface CCVM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    ctype(): CRAD | null;
    ctype(value: CRAD | null): void;
    code(): string | null;
    code(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    search_label(): string | null;
    search_label(value: string | null): void;
    is_simple(): boolean | null;
    is_simple(value: boolean | null): void;
    concept_uri(): string | null;
    concept_uri(value: string | null): void;
    composite_def(): CCRAED | null;
    composite_def(value: CCRAED | null): void;
}

export interface CDFM extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    multi(): boolean | null;
    multi(value: boolean | null): void;
}

export interface CFDFS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    interface(): CFDI | null;
    interface(value: CFDI | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    filters(): string | null;
    filters(value: string | null): void;
}

export interface CFDI extends IdlObject {
    key(): string | null;
    key(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface CFG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    manual(): boolean | null;
    manual(value: boolean | null): void;
    members(): CFGM | null;
    members(value: CFGM | null): void;
}

export interface CFGM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    floating_group(): CFG | null;
    floating_group(value: CFG | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    stop_depth(): number | null;
    stop_depth(value: number | null): void;
    max_depth(): number | null;
    max_depth(value: number | null): void;
    exclude(): boolean | null;
    exclude(value: boolean | null): void;
}

export interface CGF extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
    enabled(): boolean | null;
    enabled(value: boolean | null): void;
}

export interface CGS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    service_code(): string | null;
    service_code(value: string | null): void;
    api_key(): string | null;
    api_key(value: string | null): void;
}

export interface CHDD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    forceto(): boolean | null;
    forceto(value: boolean | null): void;
    ceiling_date(): string | null;
    ceiling_date(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    values(): CHDDV | null;
    values(value: CHDDV | null): void;
}

export interface CHDDV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    hard_due_date(): CHDD | null;
    hard_due_date(value: CHDD | null): void;
    ceiling_date(): string | null;
    ceiling_date(value: string | null): void;
    active_date(): string | null;
    active_date(value: string | null): void;
}

export interface CHMM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    strict_ou_match(): boolean | null;
    strict_ou_match(value: boolean | null): void;
    user_home_ou(): AOU | null;
    user_home_ou(value: AOU | null): void;
    request_ou(): AOU | null;
    request_ou(value: AOU | null): void;
    pickup_ou(): AOU | null;
    pickup_ou(value: AOU | null): void;
    item_owning_ou(): AOU | null;
    item_owning_ou(value: AOU | null): void;
    item_circ_ou(): AOU | null;
    item_circ_ou(value: AOU | null): void;
    usr_grp(): PGT | null;
    usr_grp(value: PGT | null): void;
    requestor_grp(): PGT | null;
    requestor_grp(value: PGT | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    marc_type(): CITM | null;
    marc_type(value: CITM | null): void;
    marc_form(): CIFM | null;
    marc_form(value: CIFM | null): void;
    marc_bib_level(): CBLVL | null;
    marc_bib_level(value: CBLVL | null): void;
    marc_vr_format(): CVRFM | null;
    marc_vr_format(value: CVRFM | null): void;
    ref_flag(): boolean | null;
    ref_flag(value: boolean | null): void;
    item_age(): string | null;
    item_age(value: string | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    distance_is_from_owner(): boolean | null;
    distance_is_from_owner(value: boolean | null): void;
    transit_range(): AOUT | null;
    transit_range(value: AOUT | null): void;
    max_holds(): number | null;
    max_holds(value: number | null): void;
    include_frozen_holds(): boolean | null;
    include_frozen_holds(value: boolean | null): void;
    age_hold_protect_rule(): CRAHP | null;
    age_hold_protect_rule(value: CRAHP | null): void;
    stop_blocked_user(): boolean | null;
    stop_blocked_user(value: boolean | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface CHMW extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    user_home_ou(): number | null;
    user_home_ou(value: number | null): void;
    request_ou(): number | null;
    request_ou(value: number | null): void;
    pickup_ou(): number | null;
    pickup_ou(value: number | null): void;
    item_owning_ou(): number | null;
    item_owning_ou(value: number | null): void;
    item_circ_ou(): number | null;
    item_circ_ou(value: number | null): void;
    usr_grp(): number | null;
    usr_grp(value: number | null): void;
    requestor_grp(): number | null;
    requestor_grp(value: number | null): void;
    circ_modifier(): number | null;
    circ_modifier(value: number | null): void;
    marc_type(): number | null;
    marc_type(value: number | null): void;
    marc_form(): number | null;
    marc_form(value: number | null): void;
    marc_bib_level(): number | null;
    marc_bib_level(value: number | null): void;
    marc_vr_format(): number | null;
    marc_vr_format(value: number | null): void;
    juvenile_flag(): number | null;
    juvenile_flag(value: number | null): void;
    ref_flag(): number | null;
    ref_flag(value: number | null): void;
    item_age(): number | null;
    item_age(value: number | null): void;
}

export interface CHT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    description(): string | null;
    description(value: string | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
}

export interface CIFM extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    func(): string | null;
    func(value: string | null): void;
    param_count(): number | null;
    param_count(value: number | null): void;
}

export interface CIRC extends IdlObject {
    checkin_lib(): AOU | null;
    checkin_lib(value: AOU | null): void;
    checkin_staff(): AU | null;
    checkin_staff(value: AU | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_staff(): AU | null;
    circ_staff(value: AU | null): void;
    desk_renewal(): boolean | null;
    desk_renewal(value: boolean | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    opac_renewal(): boolean | null;
    opac_renewal(value: boolean | null): void;
    phone_renewal(): boolean | null;
    phone_renewal(value: boolean | null): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    checkin_workstation(): AWS | null;
    checkin_workstation(value: AWS | null): void;
    checkin_scan_time(): string | null;
    checkin_scan_time(value: string | null): void;
    parent_circ(): CIRC | null;
    parent_circ(value: CIRC | null): void;
    billings(): MB | null;
    billings(value: MB | null): void;
    payments(): MP | null;
    payments(value: MP | null): void;
    billable_transaction(): MBT | null;
    billable_transaction(value: MBT | null): void;
    circ_type(): RCIRCT | null;
    circ_type(value: RCIRCT | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    unrecovered(): boolean | null;
    unrecovered(value: boolean | null): void;
    copy_location(): ACPL | null;
    copy_location(value: ACPL | null): void;
    aaactsc_entries(): AAACTSC | null;
    aaactsc_entries(value: AAACTSC | null): void;
    aaasc_entries(): AAASC | null;
    aaasc_entries(value: AAASC | null): void;
    auto_renewal(): boolean | null;
    auto_renewal(value: boolean | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
}

export interface CIRCBYYR extends IdlObject {
    copy(): ACP | null;
    copy(value: ACP | null): void;
    count(): number | null;
    count(value: number | null): void;
    year(): number | null;
    year(value: number | null): void;
    is_renewal(): boolean | null;
    is_renewal(value: boolean | null): void;
}

export interface CIT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface CITM extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CLFM extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CLM extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CMC extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    buoyant(): boolean | null;
    buoyant(value: boolean | null): void;
    restrict(): boolean | null;
    restrict(value: boolean | null): void;
    combined(): boolean | null;
    combined(value: boolean | null): void;
    a_weight(): number | null;
    a_weight(value: number | null): void;
    b_weight(): number | null;
    b_weight(value: number | null): void;
    c_weight(): number | null;
    c_weight(value: number | null): void;
    d_weight(): number | null;
    d_weight(value: number | null): void;
    low_result_threshold(): number | null;
    low_result_threshold(value: number | null): void;
    max_suggestions(): number | null;
    max_suggestions(value: number | null): void;
    variant_authority_suggestion(): boolean | null;
    variant_authority_suggestion(value: boolean | null): void;
    min_suggestion_use_threshold(): number | null;
    min_suggestion_use_threshold(value: number | null): void;
    soundex_weight(): number | null;
    soundex_weight(value: number | null): void;
    pg_trgm_weight(): number | null;
    pg_trgm_weight(value: number | null): void;
    keyboard_distance_weight(): number | null;
    keyboard_distance_weight(value: number | null): void;
    symspell_transfer_case(): boolean | null;
    symspell_transfer_case(value: boolean | null): void;
    symspell_skip_correct(): boolean | null;
    symspell_skip_correct(value: boolean | null): void;
    symspell_suggestion_verbosity(): number | null;
    symspell_suggestion_verbosity(value: number | null): void;
    max_phrase_edit_distance(): number | null;
    max_phrase_edit_distance(value: number | null): void;
    suggestion_word_option_count(): number | null;
    suggestion_word_option_count(value: number | null): void;
    fields(): CMF | null;
    fields(value: CMF | null): void;
}

export interface CMCTS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    field_class(): CMC | null;
    field_class(value: CMC | null): void;
    ts_config(): CTCL | null;
    ts_config(value: CTCL | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    index_weight(): string | null;
    index_weight(value: string | null): void;
    index_lang(): string | null;
    index_lang(value: string | null): void;
    search_lang(): string | null;
    search_lang(value: string | null): void;
    always(): boolean | null;
    always(value: boolean | null): void;
}

export interface CMF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    field_class(): CMC | null;
    field_class(value: CMC | null): void;
    label(): string | null;
    label(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    weight(): number | null;
    weight(value: number | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    joiner(): string | null;
    joiner(value: string | null): void;
    format(): CXT | null;
    format(value: CXT | null): void;
    search_field(): boolean | null;
    search_field(value: boolean | null): void;
    facet_field(): boolean | null;
    facet_field(value: boolean | null): void;
    facet_xpath(): string | null;
    facet_xpath(value: string | null): void;
    display_field(): boolean | null;
    display_field(value: boolean | null): void;
    display_xpath(): string | null;
    display_xpath(value: string | null): void;
    browse_field(): boolean | null;
    browse_field(value: boolean | null): void;
    browse_nocase(): boolean | null;
    browse_nocase(value: boolean | null): void;
    browse_xpath(): string | null;
    browse_xpath(value: string | null): void;
    browse_sort_xpath(): string | null;
    browse_sort_xpath(value: string | null): void;
    authority_xpath(): string | null;
    authority_xpath(value: string | null): void;
    restrict(): boolean | null;
    restrict(value: boolean | null): void;
    display_field_map(): CDFM | null;
    display_field_map(value: CDFM | null): void;
    data_sources(): CMFVM | null;
    data_sources(value: CMFVM | null): void;
}

export interface CMFINM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    norm(): CIN | null;
    norm(value: CIN | null): void;
    params(): string | null;
    params(value: string | null): void;
    pos(): number | null;
    pos(value: number | null): void;
}

export interface CMFPM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fixed_field(): string | null;
    fixed_field(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    rec_type(): string | null;
    rec_type(value: string | null): void;
    start_pos(): number | null;
    start_pos(value: number | null): void;
    length(): number | null;
    length(value: number | null): void;
    default_val(): string | null;
    default_val(value: string | null): void;
}

export interface CMFTS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    metabib_field(): CMF | null;
    metabib_field(value: CMF | null): void;
    ts_config(): CTCL | null;
    ts_config(value: CTCL | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    index_weight(): string | null;
    index_weight(value: string | null): void;
    index_lang(): string | null;
    index_lang(value: string | null): void;
    search_lang(): string | null;
    search_lang(value: string | null): void;
}

export interface CMFVM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    real(): CMF | null;
    real(value: CMF | null): void;
    virtual(): CMF | null;
    virtual(value: CMF | null): void;
    weight(): number | null;
    weight(value: number | null): void;
}

export interface CMPCSM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    ptype_key(): CMPCTM | null;
    ptype_key(value: CMPCTM | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    start_pos(): number | null;
    start_pos(value: number | null): void;
    length(): number | null;
    length(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CMPCTM extends IdlObject {
    ptype_key(): number | null;
    ptype_key(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CMPCVM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    value(): string | null;
    value(value: string | null): void;
    ptype_subfield(): CMPCSM | null;
    ptype_subfield(value: CMPCSM | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CMRCFLD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    marc_format(): CMRCFMT | null;
    marc_format(value: CMRCFMT | null): void;
    marc_record_type(): string | null;
    marc_record_type(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    fixed_field(): boolean | null;
    fixed_field(value: boolean | null): void;
    repeatable(): boolean | null;
    repeatable(value: boolean | null): void;
    mandatory(): boolean | null;
    mandatory(value: boolean | null): void;
    hidden(): boolean | null;
    hidden(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
}

export interface CMRCFMT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface CMRCSUBFLD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    marc_format(): CMRCFMT | null;
    marc_format(value: CMRCFMT | null): void;
    marc_record_type(): string | null;
    marc_record_type(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    repeatable(): boolean | null;
    repeatable(value: boolean | null): void;
    mandatory(): boolean | null;
    mandatory(value: boolean | null): void;
    hidden(): boolean | null;
    hidden(value: boolean | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
}

export interface CMRTM extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    type_val(): string | null;
    type_val(value: string | null): void;
    blvl_val(): string | null;
    blvl_val(value: string | null): void;
}

export interface CMSA extends IdlObject {
    alias(): string | null;
    alias(value: string | null): void;
    field_class(): CMC | null;
    field_class(value: CMC | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
}

export interface CNAL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface CNCT extends IdlObject {
    circ_duration(): any;
    circ_duration(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    in_house(): boolean | null;
    in_house(value: boolean | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface COAI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    api_key(): string | null;
    api_key(value: string | null): void;
    connection_id(): string | null;
    connection_id(value: string | null): void;
    connection_uri(): string | null;
    connection_uri(value: string | null): void;
    auto_signon_enabled(): boolean | null;
    auto_signon_enabled(value: boolean | null): void;
    auto_signout_enabled(): boolean | null;
    auto_signout_enabled(value: boolean | null): void;
    unique_identifier(): COAUF | null;
    unique_identifier(value: COAUF | null): void;
    display_name(): COANF | null;
    display_name(value: COANF | null): void;
    release_prefix(): boolean | null;
    release_prefix(value: boolean | null): void;
    release_first_given_name(): boolean | null;
    release_first_given_name(value: boolean | null): void;
    release_second_given_name(): boolean | null;
    release_second_given_name(value: boolean | null): void;
    release_family_name(): boolean | null;
    release_family_name(value: boolean | null): void;
    release_suffix(): boolean | null;
    release_suffix(value: boolean | null): void;
    release_email(): boolean | null;
    release_email(value: boolean | null): void;
    release_home_ou(): boolean | null;
    release_home_ou(value: boolean | null): void;
    release_barcode(): boolean | null;
    release_barcode(value: boolean | null): void;
}

export interface COANF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface COAUF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface COMBAHR extends IdlObject {
    status(): string | null;
    status(value: string | null): void;
    capture_time(): string | null;
    capture_time(value: string | null): void;
    current_copy(): ACP | null;
    current_copy(value: ACP | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    expire_time(): string | null;
    expire_time(value: string | null): void;
    fulfillment_lib(): AOU | null;
    fulfillment_lib(value: AOU | null): void;
    fulfillment_staff(): AU | null;
    fulfillment_staff(value: AU | null): void;
    fulfillment_time(): string | null;
    fulfillment_time(value: string | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
    holdable_formats(): string | null;
    holdable_formats(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    phone_notify(): boolean | null;
    phone_notify(value: boolean | null): void;
    sms_notify(): boolean | null;
    sms_notify(value: boolean | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    prev_check_time(): string | null;
    prev_check_time(value: string | null): void;
    request_lib(): AOU | null;
    request_lib(value: AOU | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    usr_post_code(): string | null;
    usr_post_code(value: string | null): void;
    usr_home_ou(): AOU | null;
    usr_home_ou(value: AOU | null): void;
    usr_profile(): PGT | null;
    usr_profile(value: PGT | null): void;
    usr_birth_year(): number | null;
    usr_birth_year(value: number | null): void;
    staff_placed(): boolean | null;
    staff_placed(value: boolean | null): void;
    selection_depth(): string | null;
    selection_depth(value: string | null): void;
    selection_ou(): AOU | null;
    selection_ou(value: AOU | null): void;
    target(): any;
    target(value: any): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
    bib_rec(): RHRR | null;
    bib_rec(value: RHRR | null): void;
    frozen(): boolean | null;
    frozen(value: boolean | null): void;
    thaw_date(): string | null;
    thaw_date(value: string | null): void;
    shelf_time(): string | null;
    shelf_time(value: string | null): void;
    cancel_cause(): AHRCC | null;
    cancel_cause(value: AHRCC | null): void;
    cancel_note(): string | null;
    cancel_note(value: string | null): void;
    cut_in_line(): boolean | null;
    cut_in_line(value: boolean | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    shelf_expire_time(): string | null;
    shelf_expire_time(value: string | null): void;
    current_shelf_lib(): AOU | null;
    current_shelf_lib(value: AOU | null): void;
    behind_desk(): boolean | null;
    behind_desk(value: boolean | null): void;
}

export interface COMBCIRC extends IdlObject {
    checkin_lib(): AOU | null;
    checkin_lib(value: AOU | null): void;
    checkin_staff(): AU | null;
    checkin_staff(value: AU | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_staff(): AU | null;
    circ_staff(value: AU | null): void;
    desk_renewal(): boolean | null;
    desk_renewal(value: boolean | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    opac_renewal(): boolean | null;
    opac_renewal(value: boolean | null): void;
    phone_renewal(): boolean | null;
    phone_renewal(value: boolean | null): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    usr_post_code(): string | null;
    usr_post_code(value: string | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    parent_circ(): ACIRC | null;
    parent_circ(value: ACIRC | null): void;
    checkin_scan_time(): string | null;
    checkin_scan_time(value: string | null): void;
    checkin_workstation(): AWS | null;
    checkin_workstation(value: AWS | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    billings(): MALLB | null;
    billings(value: MALLB | null): void;
    payments(): MALLP | null;
    payments(value: MALLP | null): void;
    billable_transaction(): MBT | null;
    billable_transaction(value: MBT | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    circ_type(): RCIRCT | null;
    circ_type(value: RCIRCT | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    usr_home_ou(): AOU | null;
    usr_home_ou(value: AOU | null): void;
    usr_profile(): PGT | null;
    usr_profile(value: PGT | null): void;
    usr_birth_year(): number | null;
    usr_birth_year(value: number | null): void;
    copy_call_number(): ACN | null;
    copy_call_number(value: ACN | null): void;
    copy_location(): ACPL | null;
    copy_location(value: ACPL | null): void;
    copy_owning_lib(): AOU | null;
    copy_owning_lib(value: AOU | null): void;
    copy_circ_lib(): AOU | null;
    copy_circ_lib(value: AOU | null): void;
    copy_bib_record(): BRE | null;
    copy_bib_record(value: BRE | null): void;
    aaactsc_entries(): AAACTSC | null;
    aaactsc_entries(value: AAACTSC | null): void;
    aaasc_entries(): AAASC | null;
    aaasc_entries(value: AAASC | null): void;
    active_circ(): CIRC | null;
    active_circ(value: CIRC | null): void;
    aged_circ(): ACIRC | null;
    aged_circ(value: ACIRC | null): void;
    auto_renewal(): boolean | null;
    auto_renewal(value: boolean | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
}

export interface COUST extends IdlObject {
    name(): AOUS | null;
    name(value: AOUS | null): void;
    label(): string | null;
    label(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    datatype(): string | null;
    datatype(value: string | null): void;
    view_perm(): PPL | null;
    view_perm(value: PPL | null): void;
    update_perm(): PPL | null;
    update_perm(value: PPL | null): void;
    fm_class(): string | null;
    fm_class(value: string | null): void;
    grp(): CSG | null;
    grp(value: CSG | null): void;
}

export interface COUSTL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    date_applied(): string | null;
    date_applied(value: string | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    original_value(): string | null;
    original_value(value: string | null): void;
    new_value(): string | null;
    new_value(value: string | null): void;
    field_name(): COUST | null;
    field_name(value: COUST | null): void;
}

export interface CPLHM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    import_header(): string | null;
    import_header(value: string | null): void;
    default_header(): string | null;
    default_header(value: string | null): void;
}

export interface CPLVM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    mapping_type(): string | null;
    mapping_type(value: string | null): void;
    import_value(): string | null;
    import_value(value: string | null): void;
    native_value(): string | null;
    native_value(value: string | null): void;
}

export interface CPT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    locale(): I18N_L | null;
    locale(value: I18N_L | null): void;
    content_type(): string | null;
    content_type(value: string | null): void;
    template(): string | null;
    template(value: string | null): void;
}

export interface CRA extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    context_org(): AOU | null;
    context_org(value: AOU | null): void;
    enabled(): boolean | null;
    enabled(value: boolean | null): void;
    perm(): PPL | null;
    perm(value: PPL | null): void;
    restrict_to_org(): boolean | null;
    restrict_to_org(value: boolean | null): void;
    allow_inactive(): boolean | null;
    allow_inactive(value: boolean | null): void;
    allow_expired(): boolean | null;
    allow_expired(value: boolean | null): void;
    block_list(): string | null;
    block_list(value: string | null): void;
    usr_activity_type(): CUAT | null;
    usr_activity_type(value: CUAT | null): void;
}

export interface CRACCT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    host(): string | null;
    host(value: string | null): void;
    username(): string | null;
    username(value: string | null): void;
    password(): string | null;
    password(value: string | null): void;
    account(): string | null;
    account(value: string | null): void;
    path(): string | null;
    path(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    last_activity(): string | null;
    last_activity(value: string | null): void;
}

export interface CRAD extends IdlObject {
    name(): number | null;
    name(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    multi(): boolean | null;
    multi(value: boolean | null): void;
    filter(): boolean | null;
    filter(value: boolean | null): void;
    sorter(): boolean | null;
    sorter(value: boolean | null): void;
    composite(): boolean | null;
    composite(value: boolean | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    sf_list(): string | null;
    sf_list(value: string | null): void;
    joiner(): string | null;
    joiner(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    format(): CXT | null;
    format(value: CXT | null): void;
    start_pos(): number | null;
    start_pos(value: number | null): void;
    string_len(): number | null;
    string_len(value: number | null): void;
    fixed_field(): string | null;
    fixed_field(value: string | null): void;
    phys_char_sf(): string | null;
    phys_char_sf(value: string | null): void;
    vocabulary(): string | null;
    vocabulary(value: string | null): void;
    normalizers(): CRAINM | null;
    normalizers(value: CRAINM | null): void;
}

export interface CRAHP extends IdlObject {
    age(): any;
    age(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    prox(): number | null;
    prox(value: number | null): void;
}

export interface CRAINM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    attr(): CRAD | null;
    attr(value: CRAD | null): void;
    norm(): CIN | null;
    norm(value: CIN | null): void;
    params(): string | null;
    params(value: string | null): void;
    pos(): number | null;
    pos(value: number | null): void;
}

export interface CRCD extends IdlObject {
    extended(): any;
    extended(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_renewals(): number | null;
    max_renewals(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    normal(): any;
    normal(value: any): void;
    shrt(): any;
    shrt(value: any): void;
    max_auto_renewals(): number | null;
    max_auto_renewals(value: number | null): void;
}

export interface CRMF extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    is_percent(): boolean | null;
    is_percent(value: boolean | null): void;
}

export interface CRRF extends IdlObject {
    high(): number | null;
    high(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    low(): number | null;
    low(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    normal(): number | null;
    normal(value: number | null): void;
    recurrence_interval(): any;
    recurrence_interval(value: any): void;
    grace_period(): any;
    grace_period(value: any): void;
}

export interface CSC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    region(): string | null;
    region(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    email_gateway(): string | null;
    email_gateway(value: string | null): void;
}

export interface CSG extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CSP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    block_list(): string | null;
    block_list(value: string | null): void;
    staff_alert(): boolean | null;
    staff_alert(value: boolean | null): void;
    org_depth(): number | null;
    org_depth(value: number | null): void;
    ignore_proximity(): number | null;
    ignore_proximity(value: number | null): void;
}

export interface CST extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CTCL extends IdlObject {
    id(): string | null;
    id(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
}

export interface CUAT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    ewho(): string | null;
    ewho(value: string | null): void;
    ewhat(): string | null;
    ewhat(value: string | null): void;
    ehow(): string | null;
    ehow(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    egroup(): string | null;
    egroup(value: string | null): void;
    enabled(): boolean | null;
    enabled(value: boolean | null): void;
    transient(): boolean | null;
    transient(value: boolean | null): void;
}

export interface CUB extends IdlObject {
    items(): CUBI | null;
    items(value: CUBI | null): void;
    btype(): string | null;
    btype(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface CUBI extends IdlObject {
    bucket(): CUB | null;
    bucket(value: CUB | null): void;
    id(): number | null;
    id(value: number | null): void;
    target_user(): AU | null;
    target_user(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    notes(): CUBIN | null;
    notes(value: CUBIN | null): void;
}

export interface CUBIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item(): CUBI | null;
    item(value: CUBI | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CUBN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    bucket(): CUB | null;
    bucket(value: CUB | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface CUBT extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CUSPPE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    page_col(): number | null;
    page_col(value: number | null): void;
    col_pos(): number | null;
    col_pos(value: number | null): void;
    entry_type(): CUSPPET | null;
    entry_type(value: CUSPPET | null): void;
    label(): string | null;
    label(value: string | null): void;
    image_url(): string | null;
    image_url(value: string | null): void;
    target_url(): string | null;
    target_url(value: string | null): void;
    entry_text(): string | null;
    entry_text(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
}

export interface CUSPPET extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface CUST extends IdlObject {
    name(): AUS | null;
    name(value: AUS | null): void;
    label(): string | null;
    label(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    datatype(): string | null;
    datatype(value: string | null): void;
    fm_class(): string | null;
    fm_class(value: string | null): void;
    grp(): CSG | null;
    grp(value: CSG | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    reg_default(): string | null;
    reg_default(value: string | null): void;
}

export interface CVRFM extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface CWA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
    circ_weights(): CCMW | null;
    circ_weights(value: CCMW | null): void;
    hold_weights(): CHMW | null;
    hold_weights(value: CHMW | null): void;
}

export interface CWST extends IdlObject {
    name(): AOUS | null;
    name(value: AOUS | null): void;
    label(): string | null;
    label(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    datatype(): string | null;
    datatype(value: string | null): void;
    fm_class(): string | null;
    fm_class(value: string | null): void;
    grp(): CSG | null;
    grp(value: CSG | null): void;
}

export interface CXT extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    namespace_uri(): string | null;
    namespace_uri(value: string | null): void;
    prefix(): string | null;
    prefix(value: string | null): void;
    xslt(): string | null;
    xslt(value: string | null): void;
}

export interface CZA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    source(): CZS | null;
    source(value: CZS | null): void;
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    code(): number | null;
    code(value: number | null): void;
    format(): number | null;
    format(value: number | null): void;
    truncation(): number | null;
    truncation(value: number | null): void;
}

export interface CZIFM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    metabib_field(): CMF | null;
    metabib_field(value: CMF | null): void;
    record_attr(): CRAD | null;
    record_attr(value: CRAD | null): void;
    z3950_attr(): CZA | null;
    z3950_attr(value: CZA | null): void;
    z3950_attr_type(): string | null;
    z3950_attr_type(value: string | null): void;
}

export interface CZS extends IdlObject {
    name(): number | null;
    name(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    host(): string | null;
    host(value: string | null): void;
    port(): number | null;
    port(value: number | null): void;
    db(): string | null;
    db(value: string | null): void;
    record_format(): string | null;
    record_format(value: string | null): void;
    transmission_format(): string | null;
    transmission_format(value: string | null): void;
    auth(): boolean | null;
    auth(value: boolean | null): void;
    attrs(): CZA | null;
    attrs(value: CZA | null): void;
    use_perm(): PPL | null;
    use_perm(value: PPL | null): void;
}

export interface ERCCPO extends IdlObject {
    bibid(): BRE | null;
    bibid(value: BRE | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    last_edit_time(): string | null;
    last_edit_time(value: string | null): void;
    has_only_deleted_copies(): number | null;
    has_only_deleted_copies(value: number | null): void;
    deleted_count(): number | null;
    deleted_count(value: number | null): void;
    visible_count(): number | null;
    visible_count(value: number | null): void;
    total_count(): number | null;
    total_count(value: number | null): void;
}

export interface ERFCC extends IdlObject {
    id(): ACP | null;
    id(value: ACP | null): void;
    circ_count(): number | null;
    circ_count(value: number | null): void;
}

export interface ERGBHU extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    holding_update(): string | null;
    holding_update(value: string | null): void;
    update_type(): string | null;
    update_type(value: string | null): void;
}

export interface EX extends IdlObject {
    err_msg(): string | null;
    err_msg(value: string | null): void;
    type(): string | null;
    type(value: string | null): void;
}

export interface FDOC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fm_class(): string | null;
    fm_class(value: string | null): void;
    field(): string | null;
    field(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    string(): string | null;
    string(value: string | null): void;
}

export interface HASHOLDSCOUNT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    count(): string | null;
    count(value: string | null): void;
}

export interface I18N extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fq_field(): string | null;
    fq_field(value: string | null): void;
    identity_value(): string | null;
    identity_value(value: string | null): void;
    translation(): I18N_L | null;
    translation(value: I18N_L | null): void;
    string(): string | null;
    string(value: string | null): void;
}

export interface I18N_L extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    marc_code(): string | null;
    marc_code(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    rtl(): boolean | null;
    rtl(value: boolean | null): void;
}

export interface I18NS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    context(): string | null;
    context(value: string | null): void;
    string(): string | null;
    string(value: string | null): void;
}

export interface IATC extends IdlObject {
    copy_status(): CCS | null;
    copy_status(value: CCS | null): void;
    dest(): AOU | null;
    dest(value: AOU | null): void;
    dest_recv_time(): string | null;
    dest_recv_time(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    persistant_transfer(): boolean | null;
    persistant_transfer(value: boolean | null): void;
    prev_hop(): ATC | null;
    prev_hop(value: ATC | null): void;
    source(): AOU | null;
    source(value: AOU | null): void;
    source_send_time(): string | null;
    source_send_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    hold_transit_copy(): AHTC | null;
    hold_transit_copy(value: AHTC | null): void;
    cancel_time(): string | null;
    cancel_time(value: string | null): void;
}

export interface JUB extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    selector(): AU | null;
    selector(value: AU | null): void;
    picklist(): ACQPL | null;
    picklist(value: ACQPL | null): void;
    purchase_order(): ACQPO | null;
    purchase_order(value: ACQPO | null): void;
    provider(): ACQPRO | null;
    provider(value: ACQPRO | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    edit_time(): string | null;
    edit_time(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    eg_bib_id(): BRE | null;
    eg_bib_id(value: BRE | null): void;
    source_label(): string | null;
    source_label(value: string | null): void;
    expected_recv_time(): string | null;
    expected_recv_time(value: string | null): void;
    state(): JUBSTLBL | null;
    state(value: JUBSTLBL | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    claim_policy(): ACQCLP | null;
    claim_policy(value: ACQCLP | null): void;
    cancel_reason(): ACQCR | null;
    cancel_reason(value: ACQCR | null): void;
    estimated_unit_price(): number | null;
    estimated_unit_price(value: number | null): void;
    queued_record(): VQBR | null;
    queued_record(value: VQBR | null): void;
    item_count(): number | null;
    item_count(value: number | null): void;
    attributes(): ACQLIA | null;
    attributes(value: ACQLIA | null): void;
    lineitem_details(): ACQLID | null;
    lineitem_details(value: ACQLID | null): void;
    lineitem_notes(): ACQLIN | null;
    lineitem_notes(value: ACQLIN | null): void;
    distribution_formulas(): ACQDFA | null;
    distribution_formulas(value: ACQDFA | null): void;
    invoice_entries(): ACQIE | null;
    invoice_entries(value: ACQIE | null): void;
    order_summary(): ACQLISUM | null;
    order_summary(value: ACQLISUM | null): void;
}

export interface JUBSTLBL extends IdlObject {
    id(): string | null;
    id(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
}

export interface LASSO extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    global(): boolean | null;
    global(value: boolean | null): void;
    maps(): LMAP | null;
    maps(value: LMAP | null): void;
}

export interface LMAP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    lasso(): LASSO | null;
    lasso(value: LASSO | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
}

export interface MAA extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    billing(): MB | null;
    billing(value: MB | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
}

export interface MAB extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    period_start(): string | null;
    period_start(value: string | null): void;
    period_end(): string | null;
    period_end(value: string | null): void;
    billing_ts(): string | null;
    billing_ts(value: string | null): void;
    billing_type(): string | null;
    billing_type(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    void_time(): string | null;
    void_time(value: string | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    voider(): AU | null;
    voider(value: AU | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    btype(): CBT | null;
    btype(value: CBT | null): void;
}

export interface MAFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MALLB extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    period_start(): string | null;
    period_start(value: string | null): void;
    period_end(): string | null;
    period_end(value: string | null): void;
    billing_ts(): string | null;
    billing_ts(value: string | null): void;
    billing_type(): string | null;
    billing_type(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    void_time(): string | null;
    void_time(value: string | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    voider(): AU | null;
    voider(value: AU | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    btype(): CBT | null;
    btype(value: CBT | null): void;
}

export interface MALLP extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    billing(): MALLB | null;
    billing(value: MALLB | null): void;
}

export interface MAP extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    billing(): MAB | null;
    billing(value: MAB | null): void;
}

export interface MB extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    period_start(): string | null;
    period_start(value: string | null): void;
    period_end(): string | null;
    period_end(value: string | null): void;
    billing_ts(): string | null;
    billing_ts(value: string | null): void;
    billing_type(): string | null;
    billing_type(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    void_time(): string | null;
    void_time(value: string | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    voider(): AU | null;
    voider(value: AU | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    btype(): CBT | null;
    btype(value: CBT | null): void;
    adjustments(): MAA | null;
    adjustments(value: MAA | null): void;
}

export interface MBE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    value(): string | null;
    value(value: string | null): void;
    def_maps(): MBEDM | null;
    def_maps(value: MBEDM | null): void;
}

export interface MBEDM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    entry(): MBE | null;
    entry(value: MBE | null): void;
    def(): CMF | null;
    def(value: CMF | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
}

export interface MBESHM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    entry(): MBE | null;
    entry(value: MBE | null): void;
    simple_heading(): ASH | null;
    simple_heading(value: ASH | null): void;
}

export interface MBP extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    cash_payment(): MCP | null;
    cash_payment(value: MCP | null): void;
    credit_card_payment(): MCCP | null;
    credit_card_payment(value: MCCP | null): void;
    credit_payment(): MCRP | null;
    credit_payment(value: MCRP | null): void;
    check_payment(): MCKP | null;
    check_payment(value: MCKP | null): void;
    work_payment(): MWP | null;
    work_payment(value: MWP | null): void;
    forgive_payment(): MFP | null;
    forgive_payment(value: MFP | null): void;
    goods_payment(): MGP | null;
    goods_payment(value: MGP | null): void;
    account_adjustment(): MAA | null;
    account_adjustment(value: MAA | null): void;
    debit_card_payment(): MDCP | null;
    debit_card_payment(value: MDCP | null): void;
}

export interface MBT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    unrecovered(): boolean | null;
    unrecovered(value: boolean | null): void;
    grocery(): MG | null;
    grocery(value: MG | null): void;
    circulation(): CIRC | null;
    circulation(value: CIRC | null): void;
    billings(): MB | null;
    billings(value: MB | null): void;
    payments(): MP | null;
    payments(value: MP | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    summary(): MBTS | null;
    summary(value: MBTS | null): void;
}

export interface MBTS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    last_billing_note(): string | null;
    last_billing_note(value: string | null): void;
    last_billing_ts(): string | null;
    last_billing_ts(value: string | null): void;
    last_billing_type(): string | null;
    last_billing_type(value: string | null): void;
    last_payment_note(): string | null;
    last_payment_note(value: string | null): void;
    last_payment_ts(): string | null;
    last_payment_ts(value: string | null): void;
    last_payment_type(): string | null;
    last_payment_type(value: string | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    xact_type(): string | null;
    xact_type(value: string | null): void;
}

export interface MBTSLV extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    last_billing_note(): string | null;
    last_billing_note(value: string | null): void;
    last_billing_ts(): string | null;
    last_billing_ts(value: string | null): void;
    last_billing_type(): string | null;
    last_billing_type(value: string | null): void;
    last_payment_note(): string | null;
    last_payment_note(value: string | null): void;
    last_payment_ts(): string | null;
    last_payment_ts(value: string | null): void;
    last_payment_type(): string | null;
    last_payment_type(value: string | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    xact_type(): string | null;
    xact_type(value: string | null): void;
    billing_location(): AOU | null;
    billing_location(value: AOU | null): void;
}

export interface MCCP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    approval_code(): string | null;
    approval_code(value: string | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    cc_number(): string | null;
    cc_number(value: string | null): void;
    cc_order_number(): string | null;
    cc_order_number(value: string | null): void;
    cc_processor(): string | null;
    cc_processor(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
}

export interface MCDE extends IdlObject {
    source(): BRE | null;
    source(value: BRE | null): void;
    name(): CDFM | null;
    name(value: CDFM | null): void;
    multi(): boolean | null;
    multi(value: boolean | null): void;
    label(): string | null;
    label(value: string | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MCKP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    check_number(): number | null;
    check_number(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
}

export interface MCP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
}

export interface MCRP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
}

export interface MCT extends IdlObject {
    collector(): AU | null;
    collector(value: AU | null): void;
    enter_time(): string | null;
    enter_time(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    location(): AOU | null;
    location(value: AOU | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface MDCP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
}

export interface MDE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
    highlight(): string | null;
    highlight(value: string | null): void;
}

export interface MDP extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    cash_drawer(): AWS | null;
    cash_drawer(value: AWS | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    cash_payment(): MCP | null;
    cash_payment(value: MCP | null): void;
    credit_card_payment(): MCCP | null;
    credit_card_payment(value: MCCP | null): void;
    check_payment(): MCKP | null;
    check_payment(value: MCKP | null): void;
    debit_card_payment(): MDCP | null;
    debit_card_payment(value: MDCP | null): void;
}

export interface MFAE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MFAF extends IdlObject {
    name(): string | null;
    name(value: string | null): void;
    label(): string | null;
    label(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface MFDE extends IdlObject {
    source(): BRE | null;
    source(value: BRE | null): void;
    name(): CDFM | null;
    name(value: CDFM | null): void;
    multi(): boolean | null;
    multi(value: boolean | null): void;
    label(): string | null;
    label(value: string | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MFP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
}

export interface MFR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    ind1(): string | null;
    ind1(value: string | null): void;
    ind2(): string | null;
    ind2(value: string | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MG extends IdlObject {
    billing_location(): AOU | null;
    billing_location(value: AOU | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    billings(): MB | null;
    billings(value: MB | null): void;
    payments(): MP | null;
    payments(value: MP | null): void;
    billable_transaction(): MBT | null;
    billable_transaction(value: MBT | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
}

export interface MGP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
}

export interface MIFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MKFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MMR extends IdlObject {
    fingerprint(): string | null;
    fingerprint(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    master_record(): BRE | null;
    master_record(value: BRE | null): void;
    mods(): string | null;
    mods(value: string | null): void;
    source_records(): MMRSM | null;
    source_records(value: MMRSM | null): void;
    source_maps(): MMRSM | null;
    source_maps(value: MMRSM | null): void;
}

export interface MMRSM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    metarecord(): MMR | null;
    metarecord(value: MMR | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
}

export interface MNDP extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    work_payment(): MWP | null;
    work_payment(value: MWP | null): void;
    forgive_payment(): MFP | null;
    forgive_payment(value: MFP | null): void;
    goods_payment(): MGP | null;
    goods_payment(value: MGP | null): void;
    credit_payment(): MCRP | null;
    credit_payment(value: MCRP | null): void;
    account_adjustment(): MAA | null;
    account_adjustment(value: MAA | null): void;
}

export interface MOBTS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    last_billing_note(): string | null;
    last_billing_note(value: string | null): void;
    last_billing_ts(): string | null;
    last_billing_ts(value: string | null): void;
    last_billing_type(): string | null;
    last_billing_type(value: string | null): void;
    last_payment_note(): string | null;
    last_payment_note(value: string | null): void;
    last_payment_ts(): string | null;
    last_payment_ts(value: string | null): void;
    last_payment_type(): string | null;
    last_payment_type(value: string | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    xact_type(): string | null;
    xact_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    grocery(): MG | null;
    grocery(value: MG | null): void;
    circulation(): CIRC | null;
    circulation(value: CIRC | null): void;
    reservation(): BRESV | null;
    reservation(value: BRESV | null): void;
    billing_location(): AOU | null;
    billing_location(value: AOU | null): void;
}

export interface MOUCS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface MOUS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface MOWBUS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface MP extends IdlObject {
    amount(): number | null;
    amount(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    voided(): boolean | null;
    voided(value: boolean | null): void;
    cash_payment(): MCP | null;
    cash_payment(value: MCP | null): void;
    credit_card_payment(): MCCP | null;
    credit_card_payment(value: MCCP | null): void;
    credit_payment(): MCRP | null;
    credit_payment(value: MCRP | null): void;
    check_payment(): MCKP | null;
    check_payment(value: MCKP | null): void;
    work_payment(): MWP | null;
    work_payment(value: MWP | null): void;
    forgive_payment(): MFP | null;
    forgive_payment(value: MFP | null): void;
    goods_payment(): MGP | null;
    goods_payment(value: MGP | null): void;
    account_adjustment(): MAA | null;
    account_adjustment(value: MAA | null): void;
    debit_card_payment(): MDCP | null;
    debit_card_payment(value: MDCP | null): void;
}

export interface MRA extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    attrs(): string | null;
    attrs(value: string | null): void;
}

export interface MRAF extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    attr(): string | null;
    attr(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MRAVL extends IdlObject {
    source(): BRE | null;
    source(value: BRE | null): void;
    vlist(): string | null;
    vlist(value: string | null): void;
}

export interface MRD extends IdlObject {
    audience(): CAM | null;
    audience(value: CAM | null): void;
    bib_level(): CBLVL | null;
    bib_level(value: CBLVL | null): void;
    cat_form(): string | null;
    cat_form(value: string | null): void;
    char_encoding(): string | null;
    char_encoding(value: string | null): void;
    control_type(): string | null;
    control_type(value: string | null): void;
    enc_level(): string | null;
    enc_level(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    item_form(): CIFM | null;
    item_form(value: CIFM | null): void;
    item_lang(): CLM | null;
    item_lang(value: CLM | null): void;
    item_type(): CITM | null;
    item_type(value: CITM | null): void;
    lit_form(): CLFM | null;
    lit_form(value: CLFM | null): void;
    pub_status(): string | null;
    pub_status(value: string | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    type_mat(): string | null;
    type_mat(value: string | null): void;
    vr_format(): string | null;
    vr_format(value: string | null): void;
    date1(): string | null;
    date1(value: string | null): void;
    date2(): string | null;
    date2(value: string | null): void;
}

export interface MRS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    attr(): CRAD | null;
    attr(value: CRAD | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MSEFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MSFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MTFE extends IdlObject {
    field(): CMF | null;
    field(value: CMF | null): void;
    id(): number | null;
    id(value: number | null): void;
    source(): BRE | null;
    source(value: BRE | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MUCS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface MUPS extends IdlObject {
    usr(): AU | null;
    usr(value: AU | null): void;
    forgive_payment(): string | null;
    forgive_payment(value: string | null): void;
    work_payment(): string | null;
    work_payment(value: string | null): void;
    credit_payment(): string | null;
    credit_payment(value: string | null): void;
    goods_payment(): string | null;
    goods_payment(value: string | null): void;
    account_adjustment(): string | null;
    account_adjustment(value: string | null): void;
}

export interface MURAV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    attr(): CRAD | null;
    attr(value: CRAD | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface MUS extends IdlObject {
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface MVR extends IdlObject {
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    doc_id(): string | null;
    doc_id(value: string | null): void;
    doc_type(): string | null;
    doc_type(value: string | null): void;
    pubdate(): string | null;
    pubdate(value: string | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    tcn(): string | null;
    tcn(value: string | null): void;
    subject(): string | null;
    subject(value: string | null): void;
    types_of_resource(): string | null;
    types_of_resource(value: string | null): void;
    call_numbers(): string | null;
    call_numbers(value: string | null): void;
    edition(): string | null;
    edition(value: string | null): void;
    online_loc(): string | null;
    online_loc(value: string | null): void;
    synopsis(): string | null;
    synopsis(value: string | null): void;
    physical_description(): string | null;
    physical_description(value: string | null): void;
    toc(): string | null;
    toc(value: string | null): void;
    copy_count(): string | null;
    copy_count(value: string | null): void;
    series(): string | null;
    series(value: string | null): void;
    serials(): string | null;
    serials(value: string | null): void;
    foreign_copy_maps(): string | null;
    foreign_copy_maps(value: string | null): void;
}

export interface MWDE extends IdlObject {
    source(): BRE | null;
    source(value: BRE | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    creators(): string | null;
    creators(value: string | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
    upc(): string | null;
    upc(value: string | null): void;
    tcn(): string | null;
    tcn(value: string | null): void;
    edition(): string | null;
    edition(value: string | null): void;
    physical_description(): string | null;
    physical_description(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    series_title(): string | null;
    series_title(value: string | null): void;
    subject_geographic(): string | null;
    subject_geographic(value: string | null): void;
    subject_name(): string | null;
    subject_name(value: string | null): void;
    subject_temporal(): string | null;
    subject_temporal(value: string | null): void;
    subject_topic(): string | null;
    subject_topic(value: string | null): void;
    abstract(): string | null;
    abstract(value: string | null): void;
    toc(): string | null;
    toc(value: string | null): void;
    pubdate(): string | null;
    pubdate(value: string | null): void;
    type_of_resource(): string | null;
    type_of_resource(value: string | null): void;
}

export interface MWP extends IdlObject {
    accepting_usr(): AU | null;
    accepting_usr(value: AU | null): void;
    amount(): number | null;
    amount(value: number | null): void;
    amount_collected(): number | null;
    amount_collected(value: number | null): void;
    id(): number | null;
    id(value: number | null): void;
    note(): string | null;
    note(value: string | null): void;
    payment_ts(): string | null;
    payment_ts(value: string | null): void;
    xact(): MBT | null;
    xact(value: MBT | null): void;
    payment(): MP | null;
    payment(value: MP | null): void;
    payment_type(): string | null;
    payment_type(value: string | null): void;
}

export interface MWPS extends IdlObject {
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    cash_payment(): string | null;
    cash_payment(value: string | null): void;
    check_payment(): string | null;
    check_payment(value: string | null): void;
    credit_card_payment(): string | null;
    credit_card_payment(value: string | null): void;
    debit_card_payment(): string | null;
    debit_card_payment(value: string | null): void;
}

export interface OAIA extends IdlObject {
    rec_id(): number | null;
    rec_id(value: number | null): void;
    datestamp(): string | null;
    datestamp(value: string | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    set_spec(): string | null;
    set_spec(value: string | null): void;
}

export interface OAIB extends IdlObject {
    rec_id(): number | null;
    rec_id(value: number | null): void;
    datestamp(): string | null;
    datestamp(value: string | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    set_spec(): string | null;
    set_spec(value: string | null): void;
}

export interface OCIRCCOUNT extends IdlObject {
    usr(): AU | null;
    usr(value: AU | null): void;
    out(): string | null;
    out(value: string | null): void;
    overdue(): string | null;
    overdue(value: string | null): void;
    lost(): string | null;
    lost(value: string | null): void;
    claims_returned(): string | null;
    claims_returned(value: string | null): void;
    long_overdue(): string | null;
    long_overdue(value: string | null): void;
}

export interface OCIRCLIST extends IdlObject {
    usr(): AU | null;
    usr(value: AU | null): void;
    out(): string | null;
    out(value: string | null): void;
    overdue(): string | null;
    overdue(value: string | null): void;
    lost(): string | null;
    lost(value: string | null): void;
    claims_returned(): string | null;
    claims_returned(value: string | null): void;
    long_overdue(): string | null;
    long_overdue(value: string | null): void;
}

export interface PERM_EX extends IdlObject {
    err_msg(): string | null;
    err_msg(value: string | null): void;
    type(): string | null;
    type(value: string | null): void;
}

export interface PGMFM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    grp(): PGT | null;
    grp(value: PGT | null): void;
    factor(): MFAF | null;
    factor(value: MFAF | null): void;
}

export interface PGPM extends IdlObject {
    depth(): number | null;
    depth(value: number | null): void;
    grantable(): boolean | null;
    grantable(value: boolean | null): void;
    grp(): PGT | null;
    grp(value: PGT | null): void;
    id(): number | null;
    id(value: number | null): void;
    perm(): PPL | null;
    perm(value: PPL | null): void;
}

export interface PGPT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    grp(): PGT | null;
    grp(value: PGT | null): void;
    penalty(): CSP | null;
    penalty(value: CSP | null): void;
    threshold(): number | null;
    threshold(value: number | null): void;
    org_unit(): AOU | null;
    org_unit(value: AOU | null): void;
}

export interface PGT extends IdlObject {
    children(): PGT | null;
    children(value: PGT | null): void;
    description(): string | null;
    description(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    parent(): PGT | null;
    parent(value: PGT | null): void;
    perm_interval(): any;
    perm_interval(value: any): void;
    application_perm(): string | null;
    application_perm(value: string | null): void;
    usergroup(): boolean | null;
    usergroup(value: boolean | null): void;
    hold_priority(): number | null;
    hold_priority(value: number | null): void;
    mfa_allowed(): boolean | null;
    mfa_allowed(value: boolean | null): void;
    mfa_required(): boolean | null;
    mfa_required(value: boolean | null): void;
}

export interface PGTDE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    grp(): PGT | null;
    grp(value: PGT | null): void;
    parent(): PGTDE | null;
    parent(value: PGTDE | null): void;
    org(): AOU | null;
    org(value: AOU | null): void;
    position(): number | null;
    position(value: number | null): void;
    children(): PGTDE | null;
    children(value: PGTDE | null): void;
}

export interface PPL extends IdlObject {
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
}

export interface PUGM extends IdlObject {
    grp(): PGT | null;
    grp(value: PGT | null): void;
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface PUOPM extends IdlObject {
    object_id(): string | null;
    object_id(value: string | null): void;
    grantable(): boolean | null;
    grantable(value: boolean | null): void;
    id(): number | null;
    id(value: number | null): void;
    perm(): PPL | null;
    perm(value: PPL | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    object_type(): string | null;
    object_type(value: string | null): void;
}

export interface PUPM extends IdlObject {
    depth(): number | null;
    depth(value: number | null): void;
    grantable(): boolean | null;
    grantable(value: boolean | null): void;
    id(): number | null;
    id(value: number | null): void;
    perm(): PPL | null;
    perm(value: PPL | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
}

export interface PUWOUM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    work_ou(): AOU | null;
    work_ou(value: AOU | null): void;
}

export interface QBV extends IdlObject {
    name(): number | null;
    name(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    type(): string | null;
    type(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    default_value(): string | null;
    default_value(value: string | null): void;
    actual_value(): string | null;
    actual_value(value: string | null): void;
}

export interface QCB extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    condition(): QXP | null;
    condition(value: QXP | null): void;
    result(): QXP | null;
    result(value: QXP | null): void;
}

export interface QDT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    datatype_name(): string | null;
    datatype_name(value: string | null): void;
    is_numeric(): boolean | null;
    is_numeric(value: boolean | null): void;
    is_composite(): boolean | null;
    is_composite(value: boolean | null): void;
}

export interface QFPD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    function_id(): QFS | null;
    function_id(value: QFS | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    datatype(): QDT | null;
    datatype(value: QDT | null): void;
}

export interface QFR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): string | null;
    type(value: string | null): void;
    table_name(): string | null;
    table_name(value: string | null): void;
    class_name(): string | null;
    class_name(value: string | null): void;
    subquery(): QSQ | null;
    subquery(value: QSQ | null): void;
    function_call(): QXP | null;
    function_call(value: QXP | null): void;
    table_alias(): string | null;
    table_alias(value: string | null): void;
    parent_relation(): QFR | null;
    parent_relation(value: QFR | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    join_type(): string | null;
    join_type(value: string | null): void;
    on_clause(): QXP | null;
    on_clause(value: QXP | null): void;
}

export interface QFS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    function_name(): string | null;
    function_name(value: string | null): void;
    return_type(): QDT | null;
    return_type(value: QDT | null): void;
    is_aggregate(): boolean | null;
    is_aggregate(value: boolean | null): void;
}

export interface QOBI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    stored_query(): QSQ | null;
    stored_query(value: QSQ | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    expression(): QXP | null;
    expression(value: QXP | null): void;
}

export interface QRC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    from_relation(): QFR | null;
    from_relation(value: QFR | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    column_name(): string | null;
    column_name(value: string | null): void;
    column_type(): QDT | null;
    column_type(value: QDT | null): void;
}

export interface QSEQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parent_query(): QSQ | null;
    parent_query(value: QSQ | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    child_query(): QSQ | null;
    child_query(value: QSQ | null): void;
}

export interface QSF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    composite_type(): QDT | null;
    composite_type(value: QDT | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    subfield_type(): QDT | null;
    subfield_type(value: QDT | null): void;
}

export interface QSI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    stored_query(): QSQ | null;
    stored_query(value: QSQ | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    expression(): QXP | null;
    expression(value: QXP | null): void;
    column_alias(): string | null;
    column_alias(value: string | null): void;
    grouped_by(): boolean | null;
    grouped_by(value: boolean | null): void;
}

export interface QSQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): string | null;
    type(value: string | null): void;
    use_all(): boolean | null;
    use_all(value: boolean | null): void;
    use_distinct(): boolean | null;
    use_distinct(value: boolean | null): void;
    from_clause(): QFR | null;
    from_clause(value: QFR | null): void;
    where_clause(): QXP | null;
    where_clause(value: QXP | null): void;
    having_clause(): QXP | null;
    having_clause(value: QXP | null): void;
    limit_count(): QXP | null;
    limit_count(value: QXP | null): void;
    offset_count(): QXP | null;
    offset_count(value: QXP | null): void;
}

export interface QXP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    type(): string | null;
    type(value: string | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    literal(): string | null;
    literal(value: string | null): void;
    table_alias(): string | null;
    table_alias(value: string | null): void;
    column_name(): string | null;
    column_name(value: string | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    operator(): string | null;
    operator(value: string | null): void;
    right_operand(): QXP | null;
    right_operand(value: QXP | null): void;
    function_id(): QFS | null;
    function_id(value: QFS | null): void;
    subquery(): QSQ | null;
    subquery(value: QSQ | null): void;
    cast_type(): QDT | null;
    cast_type(value: QDT | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
    bind_variable(): QBV | null;
    bind_variable(value: QBV | null): void;
}

export interface RACND extends IdlObject {
    call_number(): ACN | null;
    call_number(value: ACN | null): void;
    dewey(): string | null;
    dewey(value: string | null): void;
    dewey_range_tens(): string | null;
    dewey_range_tens(value: string | null): void;
    dewey_range_hundreds(): string | null;
    dewey_range_hundreds(value: string | null): void;
    dewey_block_tens(): string | null;
    dewey_block_tens(value: string | null): void;
    dewey_block_hundreds(): string | null;
    dewey_block_hundreds(value: string | null): void;
}

export interface RB extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    scope(): AOU | null;
    scope(value: AOU | null): void;
    weight(): number | null;
    weight(value: number | null): void;
    horizon_age(): string | null;
    horizon_age(value: string | null): void;
    importance_age(): string | null;
    importance_age(value: string | null): void;
    importance_interval(): string | null;
    importance_interval(value: string | null): void;
    importance_scale(): string | null;
    importance_scale(value: string | null): void;
    percentile(): number | null;
    percentile(value: number | null): void;
    attr_filter(): string | null;
    attr_filter(value: string | null): void;
    circ_mod_filter(): CCM | null;
    circ_mod_filter(value: CCM | null): void;
    src_filter(): CBS | null;
    src_filter(value: CBS | null): void;
    loc_grp_filter(): ACPLG | null;
    loc_grp_filter(value: ACPLG | null): void;
    recalc_interval(): string | null;
    recalc_interval(value: string | null): void;
    fixed_rating(): number | null;
    fixed_rating(value: number | null): void;
    discard(): number | null;
    discard(value: number | null): void;
    last_calc(): string | null;
    last_calc(value: string | null): void;
    popularity_parameter(): RP | null;
    popularity_parameter(value: RP | null): void;
}

export interface RCCBS extends IdlObject {
    id(): MBT | null;
    id(value: MBT | null): void;
    billing_location_shortname(): string | null;
    billing_location_shortname(value: string | null): void;
    billing_location_name(): string | null;
    billing_location_name(value: string | null): void;
    billing_location(): AOU | null;
    billing_location(value: AOU | null): void;
    usr_home_ou_shortname(): string | null;
    usr_home_ou_shortname(value: string | null): void;
    usr_home_ou_name(): string | null;
    usr_home_ou_name(value: string | null): void;
    usr_home_ou(): AOU | null;
    usr_home_ou(value: AOU | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_type(): string | null;
    xact_type(value: string | null): void;
    total_paid(): number | null;
    total_paid(value: number | null): void;
    total_owed(): number | null;
    total_owed(value: number | null): void;
    last_payment_ts(): string | null;
    last_payment_ts(value: string | null): void;
    last_payment_note(): string | null;
    last_payment_note(value: string | null): void;
    last_payment_type(): string | null;
    last_payment_type(value: string | null): void;
    last_billing_ts(): string | null;
    last_billing_ts(value: string | null): void;
    last_billing_note(): string | null;
    last_billing_note(value: string | null): void;
    last_billing_type(): string | null;
    last_billing_type(value: string | null): void;
    demographic_general_division(): string | null;
    demographic_general_division(value: string | null): void;
    patron_county(): string | null;
    patron_county(value: string | null): void;
    patron_city(): string | null;
    patron_city(value: string | null): void;
    patron_zip(): string | null;
    patron_zip(value: string | null): void;
    balance_owed(): number | null;
    balance_owed(value: number | null): void;
    profile_group(): string | null;
    profile_group(value: string | null): void;
}

export interface RCCC extends IdlObject {
    id(): CIRC | null;
    id(value: CIRC | null): void;
    circ_lib(): string | null;
    circ_lib(value: string | null): void;
    circ_lib_id(): AOU | null;
    circ_lib_id(value: AOU | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    circ_type(): string | null;
    circ_type(value: string | null): void;
    copy_id(): ACP | null;
    copy_id(value: ACP | null): void;
    circ_modifier(): string | null;
    circ_modifier(value: string | null): void;
    owning_lib_name(): string | null;
    owning_lib_name(value: string | null): void;
    language(): string | null;
    language(value: string | null): void;
    lit_form(): string | null;
    lit_form(value: string | null): void;
    item_form(): string | null;
    item_form(value: string | null): void;
    item_type(): string | null;
    item_type(value: string | null): void;
    shelving_location(): string | null;
    shelving_location(value: string | null): void;
    profile_group(): string | null;
    profile_group(value: string | null): void;
    demographic_general_division(): string | null;
    demographic_general_division(value: string | null): void;
    call_number(): ACN | null;
    call_number(value: ACN | null): void;
    call_number_label(): string | null;
    call_number_label(value: string | null): void;
    dewey(): string | null;
    dewey(value: string | null): void;
    patron_id(): AU | null;
    patron_id(value: AU | null): void;
    patron_home_lib(): AOU | null;
    patron_home_lib(value: AOU | null): void;
    patron_home_lib_shortname(): string | null;
    patron_home_lib_shortname(value: string | null): void;
    patron_county(): string | null;
    patron_county(value: string | null): void;
    patron_city(): string | null;
    patron_city(value: string | null): void;
    patron_zip(): string | null;
    patron_zip(value: string | null): void;
    stat_cat_1(): RSCE1 | null;
    stat_cat_1(value: RSCE1 | null): void;
    stat_cat_2(): RSCE2 | null;
    stat_cat_2(value: RSCE2 | null): void;
    dewey_range_tens(): string | null;
    dewey_range_tens(value: string | null): void;
    dewey_range_hundreds(): string | null;
    dewey_range_hundreds(value: string | null): void;
    dewey_block_tens(): string | null;
    dewey_block_tens(value: string | null): void;
    dewey_block_hundreds(): string | null;
    dewey_block_hundreds(value: string | null): void;
    stat_cat_1_value(): string | null;
    stat_cat_1_value(value: string | null): void;
    stat_cat_2_value(): string | null;
    stat_cat_2_value(value: string | null): void;
}

export interface RCIRCT extends IdlObject {
    id(): CIRC | null;
    id(value: CIRC | null): void;
    type(): string | null;
    type(value: string | null): void;
}

export interface RCR extends IdlObject {
    run(): RS | null;
    run(value: RS | null): void;
    report(): RR | null;
    report(value: RR | null): void;
    template(): RT | null;
    template(value: RT | null): void;
    template_owner(): AU | null;
    template_owner(value: AU | null): void;
    report_owner(): AU | null;
    report_owner(value: AU | null): void;
    runner(): AU | null;
    runner(value: AU | null): void;
    template_folder(): RTF | null;
    template_folder(value: RTF | null): void;
    report_folder(): RRF | null;
    report_folder(value: RRF | null): void;
    output_folder(): ROF | null;
    output_folder(value: ROF | null): void;
    report_name(): string | null;
    report_name(value: string | null): void;
    template_name(): string | null;
    template_name(value: string | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    run_time(): string | null;
    run_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    error_code(): string | null;
    error_code(value: string | null): void;
    error_text(): string | null;
    error_text(value: string | null): void;
}

export interface RCSV extends IdlObject {
    copy_id(): ACP | null;
    copy_id(value: ACP | null): void;
    owning_lib_id(): AOU | null;
    owning_lib_id(value: AOU | null): void;
    consortium_last_circ_date(): string | null;
    consortium_last_circ_date(value: string | null): void;
    system_last_circ_date(): string | null;
    system_last_circ_date(value: string | null): void;
    branch_last_circ_date(): string | null;
    branch_last_circ_date(value: string | null): void;
    consortium_last_checkin_date(): string | null;
    consortium_last_checkin_date(value: string | null): void;
    system_last_checkin_date(): string | null;
    system_last_checkin_date(value: string | null): void;
    branch_last_checkin_date(): string | null;
    branch_last_checkin_date(value: string | null): void;
    consortium_last_due_date(): string | null;
    consortium_last_due_date(value: string | null): void;
    system_last_due_date(): string | null;
    system_last_due_date(value: string | null): void;
    branch_last_due_date(): string | null;
    branch_last_due_date(value: string | null): void;
    consortium_month_to_date_circ(): number | null;
    consortium_month_to_date_circ(value: number | null): void;
    system_month_to_date_circ(): number | null;
    system_month_to_date_circ(value: number | null): void;
    branch_month_to_date_circ(): number | null;
    branch_month_to_date_circ(value: number | null): void;
    consortium_year_to_date_circ(): number | null;
    consortium_year_to_date_circ(value: number | null): void;
    system_year_to_date_circ(): number | null;
    system_year_to_date_circ(value: number | null): void;
    branch_year_to_date_circ(): number | null;
    branch_year_to_date_circ(value: number | null): void;
    consortium_lifetime_circ(): number | null;
    consortium_lifetime_circ(value: number | null): void;
    system_lifetime_circ(): number | null;
    system_lifetime_circ(value: number | null): void;
    branch_lifetime_circ(): number | null;
    branch_lifetime_circ(value: number | null): void;
    consortium_current_title_hold_count(): number | null;
    consortium_current_title_hold_count(value: number | null): void;
    system_current_title_hold_count(): number | null;
    system_current_title_hold_count(value: number | null): void;
    branch_current_title_hold_count(): number | null;
    branch_current_title_hold_count(value: number | null): void;
    consortium_lifetime_holds(): number | null;
    consortium_lifetime_holds(value: number | null): void;
    system_lifetime_holds(): number | null;
    system_lifetime_holds(value: number | null): void;
    branch_lifetime_holds(): number | null;
    branch_lifetime_holds(value: number | null): void;
    consortium_lifetime_transits(): number | null;
    consortium_lifetime_transits(value: number | null): void;
    system_lifetime_transits(): number | null;
    system_lifetime_transits(value: number | null): void;
    branch_lifetime_transits(): number | null;
    branch_lifetime_transits(value: number | null): void;
}

export interface RHCRPB extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    copy_count(): number | null;
    copy_count(value: number | null): void;
    hold_count(): number | null;
    hold_count(value: number | null): void;
    hold_copy_ratio(): number | null;
    hold_copy_ratio(value: number | null): void;
}

export interface RHCRPBAH extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    home_ou(): AOU | null;
    home_ou(value: AOU | null): void;
    holds_at_home_library(): number | null;
    holds_at_home_library(value: number | null): void;
    copy_count_at_home_library(): number | null;
    copy_count_at_home_library(value: number | null): void;
    holds_everywhere(): number | null;
    holds_everywhere(value: number | null): void;
    copy_count_everywhere(): number | null;
    copy_count_everywhere(value: number | null): void;
    home_library_ratio(): number | null;
    home_library_ratio(value: number | null): void;
    everywhere_ratio(): number | null;
    everywhere_ratio(value: number | null): void;
}

export interface RHCRPBAP extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    pickup_lib(): AOU | null;
    pickup_lib(value: AOU | null): void;
    holds_at_pickup_library(): number | null;
    holds_at_pickup_library(value: number | null): void;
    copy_count_at_pickup_library(): number | null;
    copy_count_at_pickup_library(value: number | null): void;
    holds_everywhere(): number | null;
    holds_everywhere(value: number | null): void;
    copy_count_everywhere(): number | null;
    copy_count_everywhere(value: number | null): void;
    pickup_library_ratio(): number | null;
    pickup_library_ratio(value: number | null): void;
    everywhere_ratio(): number | null;
    everywhere_ratio(value: number | null): void;
}

export interface RHCRPBAPD extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    pickup_lib_or_desc(): AOU | null;
    pickup_lib_or_desc(value: AOU | null): void;
    holds_at_or_below(): number | null;
    holds_at_or_below(value: number | null): void;
    copy_count_at_or_below(): number | null;
    copy_count_at_or_below(value: number | null): void;
    holds_everywhere(): number | null;
    holds_everywhere(value: number | null): void;
    copy_count_everywhere(): number | null;
    copy_count_everywhere(value: number | null): void;
    hold_copy_ratio_at_or_below_ou(): number | null;
    hold_copy_ratio_at_or_below_ou(value: number | null): void;
    everywhere_ratio(): number | null;
    everywhere_ratio(value: number | null): void;
}

export interface RHR extends IdlObject {
    public_name(): string | null;
    public_name(value: string | null): void;
    target_url(): string | null;
    target_url(value: string | null): void;
    target_coverage(): string | null;
    target_coverage(value: string | null): void;
    target_embargo(): string | null;
    target_embargo(value: string | null): void;
}

export interface RHRR extends IdlObject {
    id(): AHR | null;
    id(value: AHR | null): void;
    target(): number | null;
    target(value: number | null): void;
    hold_type(): string | null;
    hold_type(value: string | null): void;
    bib_record(): BRE | null;
    bib_record(value: BRE | null): void;
}

export interface RLC extends IdlObject {
    id(): ACP | null;
    id(value: ACP | null): void;
    last_circ_or_create(): string | null;
    last_circ_or_create(value: string | null): void;
    last_circ(): string | null;
    last_circ(value: string | null): void;
}

export interface RLCD extends IdlObject {
    id(): BRE | null;
    id(value: BRE | null): void;
    last_delete_date(): string | null;
    last_delete_date(value: string | null): void;
}

export interface RMOBBCOL extends IdlObject {
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    billing_types(): string | null;
    billing_types(value: string | null): void;
    balance(): number | null;
    balance(value: number | null): void;
}

export interface RMOBBHOL extends IdlObject {
    home_ou(): AOU | null;
    home_ou(value: AOU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    billing_types(): string | null;
    billing_types(value: string | null): void;
    balance(): number | null;
    balance(value: number | null): void;
}

export interface RMOBBOL extends IdlObject {
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    billing_types(): string | null;
    billing_types(value: string | null): void;
    balance(): number | null;
    balance(value: number | null): void;
}

export interface RMOCBBCOL extends IdlObject {
    id(): CIRC | null;
    id(value: CIRC | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    billing_type(): string | null;
    billing_type(value: string | null): void;
    billed(): number | null;
    billed(value: number | null): void;
}

export interface RMOCBBHOL extends IdlObject {
    id(): CIRC | null;
    id(value: CIRC | null): void;
    home_ou(): AOU | null;
    home_ou(value: AOU | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    billing_type(): string | null;
    billing_type(value: string | null): void;
    billed(): number | null;
    billed(value: number | null): void;
}

export interface RMOCBBOL extends IdlObject {
    id(): CIRC | null;
    id(value: CIRC | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    billing_type(): string | null;
    billing_type(value: string | null): void;
    billed(): number | null;
    billed(value: number | null): void;
}

export interface RMSR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fingerprint(): string | null;
    fingerprint(value: string | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    tcn_source(): string | null;
    tcn_source(value: string | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    pubdate(): number | null;
    pubdate(value: number | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
    biblio_record(): BRE | null;
    biblio_record(value: BRE | null): void;
}

export interface ROCIT extends IdlObject {
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    pubdate(): string | null;
    pubdate(value: string | null): void;
    id(): ACP | null;
    id(value: ACP | null): void;
    price(): number | null;
    price(value: number | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    call_number_label(): string | null;
    call_number_label(value: string | null): void;
    dewey_block_tens(): string | null;
    dewey_block_tens(value: string | null): void;
    dewey_block_hundreds(): string | null;
    dewey_block_hundreds(value: string | null): void;
    use_count(): number | null;
    use_count(value: number | null): void;
    circ_modifier(): string | null;
    circ_modifier(value: string | null): void;
    shelving_location(): string | null;
    shelving_location(value: string | null): void;
    stat_cat_1(): RSCE1 | null;
    stat_cat_1(value: RSCE1 | null): void;
    stat_cat_2(): RSCE2 | null;
    stat_cat_2(value: RSCE2 | null): void;
    stat_cat_1_value(): string | null;
    stat_cat_1_value(value: string | null): void;
    stat_cat_2_value(): string | null;
    stat_cat_2_value(value: string | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    owning_lib_name(): string | null;
    owning_lib_name(value: string | null): void;
    circ_lib_name(): string | null;
    circ_lib_name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    age_protect(): CRAHP | null;
    age_protect(value: CRAHP | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    ref(): boolean | null;
    ref(value: boolean | null): void;
    deposit_amount(): string | null;
    deposit_amount(value: string | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    status(): CCS | null;
    status(value: CCS | null): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    patron_barcode(): string | null;
    patron_barcode(value: string | null): void;
    patron_name(): string | null;
    patron_name(value: string | null): void;
}

export interface RODCIRC extends IdlObject {
    checkin_lib(): AOU | null;
    checkin_lib(value: AOU | null): void;
    checkin_staff(): AU | null;
    checkin_staff(value: AU | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_staff(): AU | null;
    circ_staff(value: AU | null): void;
    desk_renewal(): boolean | null;
    desk_renewal(value: boolean | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    duration_rule(): CRCD | null;
    duration_rule(value: CRCD | null): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    id(): number | null;
    id(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    max_fine_rule(): CRMF | null;
    max_fine_rule(value: CRMF | null): void;
    opac_renewal(): boolean | null;
    opac_renewal(value: boolean | null): void;
    phone_renewal(): boolean | null;
    phone_renewal(value: boolean | null): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    recurring_fine_rule(): CRRF | null;
    recurring_fine_rule(value: CRRF | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    target_copy(): ACP | null;
    target_copy(value: ACP | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    billings(): MB | null;
    billings(value: MB | null): void;
    payments(): MP | null;
    payments(value: MP | null): void;
    billable_transaction(): MBT | null;
    billable_transaction(value: MBT | null): void;
    circ_type(): RCIRCT | null;
    circ_type(value: RCIRCT | null): void;
    billing_total(): RXBT | null;
    billing_total(value: RXBT | null): void;
    payment_total(): RXPT | null;
    payment_total(value: RXPT | null): void;
    auto_renewal(): boolean | null;
    auto_renewal(value: boolean | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
}

export interface ROF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parent(): ROF | null;
    parent(value: ROF | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    shared(): boolean | null;
    shared(value: boolean | null): void;
    share_with(): AOU | null;
    share_with(value: AOU | null): void;
    simple_reporter(): boolean | null;
    simple_reporter(value: boolean | null): void;
    children(): ROF | null;
    children(value: ROF | null): void;
    outputs(): RS | null;
    outputs(value: RS | null): void;
}

export interface RP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    func(): string | null;
    func(value: string | null): void;
    require_horizon(): boolean | null;
    require_horizon(value: boolean | null): void;
    require_percentile(): boolean | null;
    require_percentile(value: boolean | null): void;
    require_importance(): boolean | null;
    require_importance(value: boolean | null): void;
}

export interface RR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    template(): RT | null;
    template(value: RT | null): void;
    data(): string | null;
    data(value: string | null): void;
    folder(): RRF | null;
    folder(value: RRF | null): void;
    recur(): boolean | null;
    recur(value: boolean | null): void;
    recurrence(): any;
    recurrence(value: any): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    runs(): RS | null;
    runs(value: RS | null): void;
}

export interface RRBS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    badge(): RB | null;
    badge(value: RB | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    score(): number | null;
    score(value: number | null): void;
}

export interface RRF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parent(): RRF | null;
    parent(value: RRF | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    shared(): boolean | null;
    shared(value: boolean | null): void;
    share_with(): AOU | null;
    share_with(value: AOU | null): void;
    simple_reporter(): boolean | null;
    simple_reporter(value: boolean | null): void;
    children(): RRF | null;
    children(value: RRF | null): void;
    reports(): RR | null;
    reports(value: RR | null): void;
}

export interface RS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    runner(): AU | null;
    runner(value: AU | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    run_time(): string | null;
    run_time(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    excel_format(): boolean | null;
    excel_format(value: boolean | null): void;
    csv_format(): boolean | null;
    csv_format(value: boolean | null): void;
    html_format(): boolean | null;
    html_format(value: boolean | null): void;
    error_code(): number | null;
    error_code(value: number | null): void;
    error_text(): string | null;
    error_text(value: string | null): void;
    report(): RR | null;
    report(value: RR | null): void;
    folder(): ROF | null;
    folder(value: ROF | null): void;
    chart_pie(): boolean | null;
    chart_pie(value: boolean | null): void;
    chart_bar(): boolean | null;
    chart_bar(value: boolean | null): void;
    chart_line(): boolean | null;
    chart_line(value: boolean | null): void;
    new_record_bucket(): boolean | null;
    new_record_bucket(value: boolean | null): void;
    existing_record_bucket(): boolean | null;
    existing_record_bucket(value: boolean | null): void;
}

export interface RSCE1 extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface RSCE2 extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface RSR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    metarecord(): MMR | null;
    metarecord(value: MMR | null): void;
    fingerprint(): string | null;
    fingerprint(value: string | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    tcn_source(): string | null;
    tcn_source(value: string | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    uniform_title(): string | null;
    uniform_title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    pubdate(): number | null;
    pubdate(value: number | null): void;
    series_title(): string | null;
    series_title(value: string | null): void;
    series_statement(): string | null;
    series_statement(value: string | null): void;
    summary(): string | null;
    summary(value: string | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
    topic_subject(): string | null;
    topic_subject(value: string | null): void;
    geographic_subject(): string | null;
    geographic_subject(value: string | null): void;
    genre(): string | null;
    genre(value: string | null): void;
    name_subject(): string | null;
    name_subject(value: string | null): void;
    corporate_subject(): string | null;
    corporate_subject(value: string | null): void;
    external_uri(): string | null;
    external_uri(value: string | null): void;
    biblio_record(): BRE | null;
    biblio_record(value: BRE | null): void;
}

export interface RSSR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    fingerprint(): string | null;
    fingerprint(value: string | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    tcn_source(): string | null;
    tcn_source(value: string | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    pubdate(): number | null;
    pubdate(value: number | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
    biblio_record(): BRE | null;
    biblio_record(value: BRE | null): void;
}

export interface RT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    data(): string | null;
    data(value: string | null): void;
    folder(): RTF | null;
    folder(value: RTF | null): void;
    description(): string | null;
    description(value: string | null): void;
    reports(): RR | null;
    reports(value: RR | null): void;
}

export interface RTF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parent(): RTF | null;
    parent(value: RTF | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    shared(): boolean | null;
    shared(value: boolean | null): void;
    share_with(): AOU | null;
    share_with(value: AOU | null): void;
    simple_reporter(): boolean | null;
    simple_reporter(value: boolean | null): void;
    children(): RTF | null;
    children(value: RTF | null): void;
    templates(): RT | null;
    templates(value: RT | null): void;
}

export interface RUD extends IdlObject {
    id(): AU | null;
    id(value: AU | null): void;
    dob(): string | null;
    dob(value: string | null): void;
    general_division(): string | null;
    general_division(value: string | null): void;
    age_division(): string | null;
    age_division(value: string | null): void;
}

export interface RXBT extends IdlObject {
    xact(): MBT | null;
    xact(value: MBT | null): void;
    unvoided(): number | null;
    unvoided(value: number | null): void;
    voided(): number | null;
    voided(value: number | null): void;
    total(): number | null;
    total(value: number | null): void;
}

export interface RXPT extends IdlObject {
    xact(): MBT | null;
    xact(value: MBT | null): void;
    unvoided(): number | null;
    unvoided(value: number | null): void;
    voided(): number | null;
    voided(value: number | null): void;
    total(): number | null;
    total(value: number | null): void;
}

export interface SASUM extends IdlObject {
    summary_type(): string | null;
    summary_type(value: string | null): void;
    id(): number | null;
    id(value: number | null): void;
    distribution(): SDIST | null;
    distribution(value: SDIST | null): void;
    generated_coverage(): string | null;
    generated_coverage(value: string | null): void;
    show_generated(): boolean | null;
    show_generated(value: boolean | null): void;
}

export interface SBSUM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    distribution(): SDIST | null;
    distribution(value: SDIST | null): void;
    generated_coverage(): string | null;
    generated_coverage(value: string | null): void;
    textual_holdings(): string | null;
    textual_holdings(value: string | null): void;
    show_generated(): boolean | null;
    show_generated(value: boolean | null): void;
}

export interface SCAP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    subscription(): SSUB | null;
    subscription(value: SSUB | null): void;
    type(): string | null;
    type(value: string | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    start_date(): string | null;
    start_date(value: string | null): void;
    end_date(): string | null;
    end_date(value: string | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    pattern_code(): string | null;
    pattern_code(value: string | null): void;
    enum_1(): string | null;
    enum_1(value: string | null): void;
    enum_2(): string | null;
    enum_2(value: string | null): void;
    enum_3(): string | null;
    enum_3(value: string | null): void;
    enum_4(): string | null;
    enum_4(value: string | null): void;
    enum_5(): string | null;
    enum_5(value: string | null): void;
    enum_6(): string | null;
    enum_6(value: string | null): void;
    chron_1(): string | null;
    chron_1(value: string | null): void;
    chron_2(): string | null;
    chron_2(value: string | null): void;
    chron_3(): string | null;
    chron_3(value: string | null): void;
    chron_4(): string | null;
    chron_4(value: string | null): void;
    chron_5(): string | null;
    chron_5(value: string | null): void;
}

export interface SDIST extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    record_entry(): SRE | null;
    record_entry(value: SRE | null): void;
    summary_method(): string | null;
    summary_method(value: string | null): void;
    subscription(): SSUB | null;
    subscription(value: SSUB | null): void;
    holding_lib(): AOU | null;
    holding_lib(value: AOU | null): void;
    label(): string | null;
    label(value: string | null): void;
    receive_call_number(): ACN | null;
    receive_call_number(value: ACN | null): void;
    receive_unit_template(): ACT | null;
    receive_unit_template(value: ACT | null): void;
    bind_call_number(): ACN | null;
    bind_call_number(value: ACN | null): void;
    bind_unit_template(): ACT | null;
    bind_unit_template(value: ACT | null): void;
    unit_label_prefix(): string | null;
    unit_label_prefix(value: string | null): void;
    unit_label_suffix(): string | null;
    unit_label_suffix(value: string | null): void;
    display_grouping(): string | null;
    display_grouping(value: string | null): void;
    streams(): SSTR | null;
    streams(value: SSTR | null): void;
    notes(): SDISTN | null;
    notes(value: SDISTN | null): void;
    basic_summary(): SBSUM | null;
    basic_summary(value: SBSUM | null): void;
    supplement_summary(): SSSUM | null;
    supplement_summary(value: SSSUM | null): void;
    index_summary(): SISUM | null;
    index_summary(value: SISUM | null): void;
}

export interface SDISTN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    distribution(): SDIST | null;
    distribution(value: SDIST | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    alert(): boolean | null;
    alert(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface SIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    item(): SITEM | null;
    item(value: SITEM | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    alert(): boolean | null;
    alert(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface SIPACC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    enabled(): boolean | null;
    enabled(value: boolean | null): void;
    setting_group(): SIPSETG | null;
    setting_group(value: SIPSETG | null): void;
    sip_username(): string | null;
    sip_username(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    transient(): boolean | null;
    transient(value: boolean | null): void;
    activity_who(): string | null;
    activity_who(value: string | null): void;
    sip_password(): number | null;
    sip_password(value: number | null): void;
}

export interface SIPFILTER extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    enabled(): boolean | null;
    enabled(value: boolean | null): void;
    setting_group(): SIPSETG | null;
    setting_group(value: SIPSETG | null): void;
    identifier(): string | null;
    identifier(value: string | null): void;
    strip(): boolean | null;
    strip(value: boolean | null): void;
    replace_with(): string | null;
    replace_with(value: string | null): void;
}

export interface SIPSES extends IdlObject {
    key(): string | null;
    key(value: string | null): void;
    ils_token(): string | null;
    ils_token(value: string | null): void;
    account(): SIPACC | null;
    account(value: SIPACC | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
}

export interface SIPSET extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    setting_group(): SIPSETG | null;
    setting_group(value: SIPSETG | null): void;
    name(): string | null;
    name(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface SIPSETG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    label(): string | null;
    label(value: string | null): void;
    institution(): string | null;
    institution(value: string | null): void;
    settings(): SIPSET | null;
    settings(value: SIPSET | null): void;
    filters(): SIPFILTER | null;
    filters(value: SIPFILTER | null): void;
}

export interface SIPSM extends IdlObject {
    key(): string | null;
    key(value: string | null): void;
    message(): string | null;
    message(value: string | null): void;
}

export interface SISS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    subscription(): SSUB | null;
    subscription(value: SSUB | null): void;
    caption_and_pattern(): SCAP | null;
    caption_and_pattern(value: SCAP | null): void;
    label(): string | null;
    label(value: string | null): void;
    date_published(): string | null;
    date_published(value: string | null): void;
    holding_code(): string | null;
    holding_code(value: string | null): void;
    holding_type(): string | null;
    holding_type(value: string | null): void;
    holding_link_id(): number | null;
    holding_link_id(value: number | null): void;
    items(): SITEM | null;
    items(value: SITEM | null): void;
}

export interface SISUM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    distribution(): SDIST | null;
    distribution(value: SDIST | null): void;
    generated_coverage(): string | null;
    generated_coverage(value: string | null): void;
    textual_holdings(): string | null;
    textual_holdings(value: string | null): void;
    show_generated(): boolean | null;
    show_generated(value: boolean | null): void;
}

export interface SITEM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    issuance(): SISS | null;
    issuance(value: SISS | null): void;
    stream(): SSTR | null;
    stream(value: SSTR | null): void;
    unit(): SUNIT | null;
    unit(value: SUNIT | null): void;
    uri(): AURI | null;
    uri(value: AURI | null): void;
    date_expected(): string | null;
    date_expected(value: string | null): void;
    date_received(): string | null;
    date_received(value: string | null): void;
    status(): string | null;
    status(value: string | null): void;
    notes(): SIN | null;
    notes(value: SIN | null): void;
    shadowed(): boolean | null;
    shadowed(value: boolean | null): void;
}

export interface SMHC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    issuance(): SISS | null;
    issuance(value: SISS | null): void;
    holding_type(): string | null;
    holding_type(value: string | null): void;
    ind1(): string | null;
    ind1(value: string | null): void;
    ind2(): string | null;
    ind2(value: string | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface SPT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    pattern_code(): string | null;
    pattern_code(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    share_depth(): number | null;
    share_depth(value: number | null): void;
}

export interface SRA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    field(): CMF | null;
    field(value: CMF | null): void;
    bump_type(): string | null;
    bump_type(value: string | null): void;
    multiplier(): any;
    multiplier(value: any): void;
}

export interface SRBPS extends IdlObject {
    xact_id(): string | null;
    xact_id(value: string | null): void;
    billing_lib_id(): number | null;
    billing_lib_id(value: number | null): void;
    billing_sys_id(): number | null;
    billing_sys_id(value: number | null): void;
    billing_lib_shortname(): string | null;
    billing_lib_shortname(value: string | null): void;
    billing_lib_name(): string | null;
    billing_lib_name(value: string | null): void;
    billing_sys_shortname(): string | null;
    billing_sys_shortname(value: string | null): void;
    billing_sys_name(): string | null;
    billing_sys_name(value: string | null): void;
    billing_grand_total(): number | null;
    billing_grand_total(value: number | null): void;
    billing_total(): number | null;
    billing_total(value: number | null): void;
    billing_voided_count(): string | null;
    billing_voided_count(value: string | null): void;
    all_billing_types(): string | null;
    all_billing_types(value: string | null): void;
    billing_types(): string | null;
    billing_types(value: string | null): void;
    billing_total_voided(): number | null;
    billing_total_voided(value: number | null): void;
    billing_overdue_amount(): number | null;
    billing_overdue_amount(value: number | null): void;
    billing_lost_amount(): number | null;
    billing_lost_amount(value: number | null): void;
    billing_long_od_amount(): number | null;
    billing_long_od_amount(value: number | null): void;
    billing_damaged_amount(): number | null;
    billing_damaged_amount(value: number | null): void;
    billing_deposit_amount(): number | null;
    billing_deposit_amount(value: number | null): void;
    billing_rental_amount(): number | null;
    billing_rental_amount(value: number | null): void;
    payment_grand_total(): number | null;
    payment_grand_total(value: number | null): void;
    payment_total(): number | null;
    payment_total(value: number | null): void;
    payment_voided_count(): string | null;
    payment_voided_count(value: string | null): void;
    all_payment_types(): string | null;
    all_payment_types(value: string | null): void;
    payment_types(): string | null;
    payment_types(value: string | null): void;
    payment_total_voided(): number | null;
    payment_total_voided(value: number | null): void;
    payment_account_adjustment_amount(): number | null;
    payment_account_adjustment_amount(value: number | null): void;
    payment_cash_amount(): number | null;
    payment_cash_amount(value: number | null): void;
    payment_check_amount(): number | null;
    payment_check_amount(value: number | null): void;
    payment_credit_card_amount(): number | null;
    payment_credit_card_amount(value: number | null): void;
    payment_debit_card_amount(): number | null;
    payment_debit_card_amount(value: number | null): void;
    payment_credit_amount(): number | null;
    payment_credit_amount(value: number | null): void;
    payment_forgive_amount(): number | null;
    payment_forgive_amount(value: number | null): void;
    payment_work_amount(): number | null;
    payment_work_amount(value: number | null): void;
    payment_goods_amount(): number | null;
    payment_goods_amount(value: number | null): void;
    payment_currency_amount(): number | null;
    payment_currency_amount(value: number | null): void;
    payment_non_currency_amount(): number | null;
    payment_non_currency_amount(value: number | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    xact_start_year(): number | null;
    xact_start_year(value: number | null): void;
    xact_start_year_mon(): string | null;
    xact_start_year_mon(value: string | null): void;
    xact_start_date(): string | null;
    xact_start_date(value: string | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_finish_year(): number | null;
    xact_finish_year(value: number | null): void;
    xact_finish_year_mon(): string | null;
    xact_finish_year_mon(value: string | null): void;
    xact_finish_date(): string | null;
    xact_finish_date(value: string | null): void;
    earliest_billing_ts(): string | null;
    earliest_billing_ts(value: string | null): void;
    earliest_billing_year(): number | null;
    earliest_billing_year(value: number | null): void;
    earliest_billing_year_mon(): string | null;
    earliest_billing_year_mon(value: string | null): void;
    earliest_billing_date(): string | null;
    earliest_billing_date(value: string | null): void;
    latest_billing_ts(): string | null;
    latest_billing_ts(value: string | null): void;
    latest_billing_year(): number | null;
    latest_billing_year(value: number | null): void;
    latest_billing_year_mon(): string | null;
    latest_billing_year_mon(value: string | null): void;
    latest_billing_date(): string | null;
    latest_billing_date(value: string | null): void;
    earliest_payment_ts(): string | null;
    earliest_payment_ts(value: string | null): void;
    earliest_payment_year(): number | null;
    earliest_payment_year(value: number | null): void;
    earliest_payment_year_mon(): string | null;
    earliest_payment_year_mon(value: string | null): void;
    earliest_payment_date(): string | null;
    earliest_payment_date(value: string | null): void;
    latest_payment_ts(): string | null;
    latest_payment_ts(value: string | null): void;
    latest_payment_year(): number | null;
    latest_payment_year(value: number | null): void;
    latest_payment_year_mon(): string | null;
    latest_payment_year_mon(value: string | null): void;
    latest_payment_date(): string | null;
    latest_payment_date(value: string | null): void;
    xact_type(): string | null;
    xact_type(value: string | null): void;
    xact_closed(): boolean | null;
    xact_closed(value: boolean | null): void;
}

export interface SRCIRC extends IdlObject {
    circ_id(): number | null;
    circ_id(value: number | null): void;
    usr_post_code(): string | null;
    usr_post_code(value: string | null): void;
    usr_bith_year(): number | null;
    usr_bith_year(value: number | null): void;
    usr_profile_id(): PGT | null;
    usr_profile_id(value: PGT | null): void;
    usr_profile(): string | null;
    usr_profile(value: string | null): void;
    usr_home_ou_id(): number | null;
    usr_home_ou_id(value: number | null): void;
    usr_home_ou_shortname(): string | null;
    usr_home_ou_shortname(value: string | null): void;
    usr_home_ou_name(): string | null;
    usr_home_ou_name(value: string | null): void;
    usr_sys_id(): number | null;
    usr_sys_id(value: number | null): void;
    usr_sys_shortname(): string | null;
    usr_sys_shortname(value: string | null): void;
    usr_sys_name(): string | null;
    usr_sys_name(value: string | null): void;
    xact_start(): string | null;
    xact_start(value: string | null): void;
    xact_start_year(): number | null;
    xact_start_year(value: number | null): void;
    xact_start_year_mon(): string | null;
    xact_start_year_mon(value: string | null): void;
    xact_start_date(): string | null;
    xact_start_date(value: string | null): void;
    circ_lib_id(): number | null;
    circ_lib_id(value: number | null): void;
    circ_lib_shortname(): string | null;
    circ_lib_shortname(value: string | null): void;
    circ_lib_name(): string | null;
    circ_lib_name(value: string | null): void;
    circ_sys_id(): number | null;
    circ_sys_id(value: number | null): void;
    circ_sys_shortname(): string | null;
    circ_sys_shortname(value: string | null): void;
    circ_sys_name(): string | null;
    circ_sys_name(value: string | null): void;
    circ_staff(): string | null;
    circ_staff(value: string | null): void;
    checkout_workstation(): string | null;
    checkout_workstation(value: string | null): void;
    due_date(): string | null;
    due_date(value: string | null): void;
    due_date_year(): number | null;
    due_date_year(value: number | null): void;
    due_date_year_mon(): string | null;
    due_date_year_mon(value: string | null): void;
    due_date_date(): string | null;
    due_date_date(value: string | null): void;
    xact_finish(): string | null;
    xact_finish(value: string | null): void;
    xact_finish_year(): number | null;
    xact_finish_year(value: number | null): void;
    xact_finish_year_mon(): string | null;
    xact_finish_year_mon(value: string | null): void;
    xact_finish_date(): string | null;
    xact_finish_date(value: string | null): void;
    checkin_lib_shortname(): string | null;
    checkin_lib_shortname(value: string | null): void;
    checkin_lib_name(): string | null;
    checkin_lib_name(value: string | null): void;
    checkin_staff(): string | null;
    checkin_staff(value: string | null): void;
    checkin_workstation(): string | null;
    checkin_workstation(value: string | null): void;
    checkin_sys_shortname(): string | null;
    checkin_sys_shortname(value: string | null): void;
    checkin_sys_name(): string | null;
    checkin_sys_name(value: string | null): void;
    checkin_time(): string | null;
    checkin_time(value: string | null): void;
    renewal_remaining(): number | null;
    renewal_remaining(value: number | null): void;
    auto_renewal_remaining(): number | null;
    auto_renewal_remaining(value: number | null): void;
    grace_period(): any;
    grace_period(value: any): void;
    stop_fines(): string | null;
    stop_fines(value: string | null): void;
    stop_fines_time(): string | null;
    stop_fines_time(value: string | null): void;
    duration(): any;
    duration(value: any): void;
    fine_interval(): any;
    fine_interval(value: any): void;
    recurring_fine(): number | null;
    recurring_fine(value: number | null): void;
    max_fine(): number | null;
    max_fine(value: number | null): void;
    duration_rule(): string | null;
    duration_rule(value: string | null): void;
    recurring_fine_rule(): string | null;
    recurring_fine_rule(value: string | null): void;
    max_fine_rule(): string | null;
    max_fine_rule(value: string | null): void;
    circ_renew(): string | null;
    circ_renew(value: string | null): void;
    renewal_type(): string | null;
    renewal_type(value: string | null): void;
    is_overdue(): boolean | null;
    is_overdue(value: boolean | null): void;
    copy_barcode(): string | null;
    copy_barcode(value: string | null): void;
    location_id(): ACPL | null;
    location_id(value: ACPL | null): void;
    location_name(): string | null;
    location_name(value: string | null): void;
    copy_circ_modifier_code(): CCM | null;
    copy_circ_modifier_code(value: CCM | null): void;
    copy_circ_modifier_name(): string | null;
    copy_circ_modifier_name(value: string | null): void;
    copy_circ_lib_id(): number | null;
    copy_circ_lib_id(value: number | null): void;
    copy_circ_lib_shortname(): string | null;
    copy_circ_lib_shortname(value: string | null): void;
    copy_circ_lib_name(): string | null;
    copy_circ_lib_name(value: string | null): void;
    copy_sys_id(): number | null;
    copy_sys_id(value: number | null): void;
    copy_sys_shortname(): string | null;
    copy_sys_shortname(value: string | null): void;
    copy_sys_name(): string | null;
    copy_sys_name(value: string | null): void;
    copy_owning_lib_id(): number | null;
    copy_owning_lib_id(value: number | null): void;
    copy_owning_lib_shortname(): string | null;
    copy_owning_lib_shortname(value: string | null): void;
    copy_owning_lib_name(): string | null;
    copy_owning_lib_name(value: string | null): void;
    copy_call_number_full(): string | null;
    copy_call_number_full(value: string | null): void;
    copy_call_number_prefix(): string | null;
    copy_call_number_prefix(value: string | null): void;
    copy_call_number_label(): string | null;
    copy_call_number_label(value: string | null): void;
    copy_call_number_suffix(): string | null;
    copy_call_number_suffix(value: string | null): void;
    copy_call_number_sortkey_full(): string | null;
    copy_call_number_sortkey_full(value: string | null): void;
    copy_call_number_prefix_sortkey(): string | null;
    copy_call_number_prefix_sortkey(value: string | null): void;
    copy_call_number_label_sortkey(): string | null;
    copy_call_number_label_sortkey(value: string | null): void;
    copy_call_number_suffix_sortkey(): string | null;
    copy_call_number_suffix_sortkey(value: string | null): void;
    copy_call_number_dewey(): string | null;
    copy_call_number_dewey(value: string | null): void;
    copy_call_number_dewey_block_tens(): string | null;
    copy_call_number_dewey_block_tens(value: string | null): void;
    copy_call_number_dewey_block_hundreds(): string | null;
    copy_call_number_dewey_block_hundreds(value: string | null): void;
    copy_call_number_dewey_range_tens(): string | null;
    copy_call_number_dewey_range_tens(value: string | null): void;
    copy_call_number_dewey_range_hundreds(): string | null;
    copy_call_number_dewey_range_hundreds(value: string | null): void;
    part_label(): string | null;
    part_label(value: string | null): void;
    part_label_sortkey(): string | null;
    part_label_sortkey(value: string | null): void;
    bib_id(): number | null;
    bib_id(value: number | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    pubdate(): number | null;
    pubdate(value: number | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
}

export interface SRCP extends IdlObject {
    copy_id(): number | null;
    copy_id(value: number | null): void;
    floating_id(): CFG | null;
    floating_id(value: CFG | null): void;
    acn_id(): number | null;
    acn_id(value: number | null): void;
    circ_lib_id(): number | null;
    circ_lib_id(value: number | null): void;
    status_id(): CCS | null;
    status_id(value: CCS | null): void;
    location_id(): ACPL | null;
    location_id(value: ACPL | null): void;
    age_protect_id(): CRAHP | null;
    age_protect_id(value: CRAHP | null): void;
    circ_sys_id(): number | null;
    circ_sys_id(value: number | null): void;
    owning_lib_id(): number | null;
    owning_lib_id(value: number | null): void;
    owning_sys_id(): number | null;
    owning_sys_id(value: number | null): void;
    inv_workstation_id(): AWS | null;
    inv_workstation_id(value: AWS | null): void;
    circ_lib_shortname(): string | null;
    circ_lib_shortname(value: string | null): void;
    circ_lib_name(): string | null;
    circ_lib_name(value: string | null): void;
    circ_sys_shortname(): string | null;
    circ_sys_shortname(value: string | null): void;
    circ_sys_name(): string | null;
    circ_sys_name(value: string | null): void;
    owning_lib_shortname(): string | null;
    owning_lib_shortname(value: string | null): void;
    owning_lib_name(): string | null;
    owning_lib_name(value: string | null): void;
    owning_sys_shortname(): string | null;
    owning_sys_shortname(value: string | null): void;
    owning_sys_name(): string | null;
    owning_sys_name(value: string | null): void;
    create_date_time(): string | null;
    create_date_time(value: string | null): void;
    create_date_year(): number | null;
    create_date_year(value: number | null): void;
    create_date_year_mon(): string | null;
    create_date_year_mon(value: string | null): void;
    create_date_date(): string | null;
    create_date_date(value: string | null): void;
    active_date_time(): string | null;
    active_date_time(value: string | null): void;
    active_date_year(): number | null;
    active_date_year(value: number | null): void;
    active_date_year_mon(): string | null;
    active_date_year_mon(value: string | null): void;
    active_date_date(): string | null;
    active_date_date(value: string | null): void;
    edit_date_time(): string | null;
    edit_date_time(value: string | null): void;
    edit_date_year(): number | null;
    edit_date_year(value: number | null): void;
    edit_date_year_mon(): string | null;
    edit_date_year_mon(value: string | null): void;
    edit_date_date(): string | null;
    edit_date_date(value: string | null): void;
    status_changed_time_time(): string | null;
    status_changed_time_time(value: string | null): void;
    status_changed_year(): number | null;
    status_changed_year(value: number | null): void;
    status_changed_year_mon(): string | null;
    status_changed_year_mon(value: string | null): void;
    status_changed_date(): string | null;
    status_changed_date(value: string | null): void;
    latest_inv_date(): string | null;
    latest_inv_date(value: string | null): void;
    latest_inv_date_year(): number | null;
    latest_inv_date_year(value: number | null): void;
    latest_inv_date_year_mon(): string | null;
    latest_inv_date_year_mon(value: string | null): void;
    latest_inv_date_date(): string | null;
    latest_inv_date_date(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    status(): string | null;
    status(value: string | null): void;
    location_name(): string | null;
    location_name(value: string | null): void;
    copy_circ_modifier_code(): CCM | null;
    copy_circ_modifier_code(value: CCM | null): void;
    copy_circ_modifier_name(): string | null;
    copy_circ_modifier_name(value: string | null): void;
    price(): number | null;
    price(value: number | null): void;
    acq_price(): number | null;
    acq_price(value: number | null): void;
    copy_deleted(): boolean | null;
    copy_deleted(value: boolean | null): void;
    reference(): boolean | null;
    reference(value: boolean | null): void;
    copy_circulate(): boolean | null;
    copy_circulate(value: boolean | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    copy_holdable(): boolean | null;
    copy_holdable(value: boolean | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    copy_opac_visible(): boolean | null;
    copy_opac_visible(value: boolean | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    age_protect(): string | null;
    age_protect(value: string | null): void;
    under_age_protection(): boolean | null;
    under_age_protection(value: boolean | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    copy_number(): number | null;
    copy_number(value: number | null): void;
    circ_as_type(): string | null;
    circ_as_type(value: string | null): void;
    loan_duration_int(): number | null;
    loan_duration_int(value: number | null): void;
    loan_duration(): string | null;
    loan_duration(value: string | null): void;
    fine_level_int(): number | null;
    fine_level_int(value: number | null): void;
    fine_level(): string | null;
    fine_level(value: string | null): void;
    creating_user(): string | null;
    creating_user(value: string | null): void;
    editing_user(): string | null;
    editing_user(value: string | null): void;
    copy_call_number_full(): string | null;
    copy_call_number_full(value: string | null): void;
    copy_call_number_prefix(): string | null;
    copy_call_number_prefix(value: string | null): void;
    copy_call_number_label(): string | null;
    copy_call_number_label(value: string | null): void;
    copy_call_number_suffix(): string | null;
    copy_call_number_suffix(value: string | null): void;
    copy_call_number_sortkey_full(): string | null;
    copy_call_number_sortkey_full(value: string | null): void;
    copy_call_number_prefix_sortkey(): string | null;
    copy_call_number_prefix_sortkey(value: string | null): void;
    copy_call_number_label_sortkey(): string | null;
    copy_call_number_label_sortkey(value: string | null): void;
    copy_call_number_suffix_sortkey(): string | null;
    copy_call_number_suffix_sortkey(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    pubdate(): number | null;
    pubdate(value: number | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
    part_label(): string | null;
    part_label(value: string | null): void;
    part_label_sortkey(): string | null;
    part_label_sortkey(value: string | null): void;
    bib_id(): number | null;
    bib_id(value: number | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    call_deleted(): boolean | null;
    call_deleted(value: boolean | null): void;
    bib_deleted(): boolean | null;
    bib_deleted(value: boolean | null): void;
    status_holdable(): boolean | null;
    status_holdable(value: boolean | null): void;
    location_holdable(): boolean | null;
    location_holdable(value: boolean | null): void;
    location_circulate(): boolean | null;
    location_circulate(value: boolean | null): void;
    inventory_workstation(): string | null;
    inventory_workstation(value: string | null): void;
    est_price(): number | null;
    est_price(value: number | null): void;
    circ_total(): number | null;
    circ_total(value: number | null): void;
    bib_subjects(): string | null;
    bib_subjects(value: string | null): void;
}

export interface SRE extends IdlObject {
    active(): boolean | null;
    active(value: boolean | null): void;
    record(): BRE | null;
    record(value: BRE | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    id(): number | null;
    id(value: number | null): void;
    last_xact_id(): string | null;
    last_xact_id(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    source(): number | null;
    source(value: number | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
}

export interface SRLU extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    stream(): SSTR | null;
    stream(value: SSTR | null): void;
    pos(): number | null;
    pos(value: number | null): void;
    reader(): AU | null;
    reader(value: AU | null): void;
    department(): string | null;
    department(value: string | null): void;
    note(): string | null;
    note(value: string | null): void;
}

export interface SRUSR extends IdlObject {
    home_ou_filter(): number | null;
    home_ou_filter(value: number | null): void;
    user_id(): number | null;
    user_id(value: number | null): void;
    barcode_primary(): string | null;
    barcode_primary(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    full_name(): string | null;
    full_name(value: string | null): void;
    prefix(): string | null;
    prefix(value: string | null): void;
    first_given_name(): string | null;
    first_given_name(value: string | null): void;
    second_given_name(): string | null;
    second_given_name(value: string | null): void;
    family_name(): string | null;
    family_name(value: string | null): void;
    suffix(): string | null;
    suffix(value: string | null): void;
    pref_full_name(): string | null;
    pref_full_name(value: string | null): void;
    pref_prefix(): string | null;
    pref_prefix(value: string | null): void;
    pref_first_given_name(): string | null;
    pref_first_given_name(value: string | null): void;
    pref_second_given_name(): string | null;
    pref_second_given_name(value: string | null): void;
    pref_family_name(): string | null;
    pref_family_name(value: string | null): void;
    pref_suffix(): string | null;
    pref_suffix(value: string | null): void;
    profile_id(): PGT | null;
    profile_id(value: PGT | null): void;
    profile(): string | null;
    profile(value: string | null): void;
    alias(): string | null;
    alias(value: string | null): void;
    all_phone(): string | null;
    all_phone(value: string | null): void;
    day_phone(): string | null;
    day_phone(value: string | null): void;
    evening_phone(): string | null;
    evening_phone(value: string | null): void;
    other_phone(): string | null;
    other_phone(value: string | null): void;
    dob(): string | null;
    dob(value: string | null): void;
    dob_year(): number | null;
    dob_year(value: number | null): void;
    dob_year_month(): string | null;
    dob_year_month(value: string | null): void;
    dob_age_years(): number | null;
    dob_age_years(value: number | null): void;
    active(): boolean | null;
    active(value: boolean | null): void;
    barred(): boolean | null;
    barred(value: boolean | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    juvenile(): boolean | null;
    juvenile(value: boolean | null): void;
    claims_returned_count(): number | null;
    claims_returned_count(value: number | null): void;
    credit_forward_balance(): number | null;
    credit_forward_balance(value: number | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    create_date_year(): number | null;
    create_date_year(value: number | null): void;
    create_date_year_mon(): string | null;
    create_date_year_mon(value: string | null): void;
    create_date_date(): string | null;
    create_date_date(value: string | null): void;
    expire_date(): string | null;
    expire_date(value: string | null): void;
    expire_date_year(): number | null;
    expire_date_year(value: number | null): void;
    expire_date_year_mon(): string | null;
    expire_date_year_mon(value: string | null): void;
    expire_date_date(): string | null;
    expire_date_date(value: string | null): void;
    claims_never_checked_out_count(): number | null;
    claims_never_checked_out_count(value: number | null): void;
    last_update_time(): string | null;
    last_update_time(value: string | null): void;
    home_ou_id(): number | null;
    home_ou_id(value: number | null): void;
    home_ou_shortname(): string | null;
    home_ou_shortname(value: string | null): void;
    home_ou_name(): string | null;
    home_ou_name(value: string | null): void;
    home_sys_id(): number | null;
    home_sys_id(value: number | null): void;
    home_sys_shortname(): string | null;
    home_sys_shortname(value: string | null): void;
    home_sys_name(): string | null;
    home_sys_name(value: string | null): void;
    mailing_valid(): boolean | null;
    mailing_valid(value: boolean | null): void;
    mailing_address_type(): string | null;
    mailing_address_type(value: string | null): void;
    mailing_street1(): string | null;
    mailing_street1(value: string | null): void;
    mailing_street2(): string | null;
    mailing_street2(value: string | null): void;
    mailing_city(): string | null;
    mailing_city(value: string | null): void;
    mailing_state(): string | null;
    mailing_state(value: string | null): void;
    mailing_country(): string | null;
    mailing_country(value: string | null): void;
    mailing_post_code(): string | null;
    mailing_post_code(value: string | null): void;
    mailing_county(): string | null;
    mailing_county(value: string | null): void;
    mailing_within_city_limits(): boolean | null;
    mailing_within_city_limits(value: boolean | null): void;
    mailing_pending(): boolean | null;
    mailing_pending(value: boolean | null): void;
    mailing_full(): string | null;
    mailing_full(value: string | null): void;
    physical_valid(): boolean | null;
    physical_valid(value: boolean | null): void;
    physical_address_type(): string | null;
    physical_address_type(value: string | null): void;
    physical_street1(): string | null;
    physical_street1(value: string | null): void;
    physical_street2(): string | null;
    physical_street2(value: string | null): void;
    physical_city(): string | null;
    physical_city(value: string | null): void;
    physical_state(): string | null;
    physical_state(value: string | null): void;
    physical_country(): string | null;
    physical_country(value: string | null): void;
    physical_post_code(): string | null;
    physical_post_code(value: string | null): void;
    physical_county(): string | null;
    physical_county(value: string | null): void;
    physical_within_city_limits(): boolean | null;
    physical_within_city_limits(value: boolean | null): void;
    physical_pending(): boolean | null;
    physical_pending(value: boolean | null): void;
    physical_full(): string | null;
    physical_full(value: string | null): void;
    phone_notify(): boolean | null;
    phone_notify(value: boolean | null): void;
    sms_notify(): boolean | null;
    sms_notify(value: boolean | null): void;
    email_notify(): boolean | null;
    email_notify(value: boolean | null): void;
    collections_exempt(): boolean | null;
    collections_exempt(value: boolean | null): void;
    notice_optin(): boolean | null;
    notice_optin(value: boolean | null): void;
    legacy_stat_cat1(): string | null;
    legacy_stat_cat1(value: string | null): void;
    legacy_stat_cat2(): string | null;
    legacy_stat_cat2(value: string | null): void;
    barcode_active(): string | null;
    barcode_active(value: string | null): void;
    barcode_all(): string | null;
    barcode_all(value: string | null): void;
    secondary_groups(): string | null;
    secondary_groups(value: string | null): void;
    circs_overdue(): number | null;
    circs_overdue(value: number | null): void;
    circs_open(): number | null;
    circs_open(value: number | null): void;
}

export interface SRWD extends IdlObject {
    copy_id(): number | null;
    copy_id(value: number | null): void;
    acn_id(): number | null;
    acn_id(value: number | null): void;
    circ_lib_id(): number | null;
    circ_lib_id(value: number | null): void;
    status_id(): CCS | null;
    status_id(value: CCS | null): void;
    location_id(): ACPL | null;
    location_id(value: ACPL | null): void;
    age_protect_id(): CRAHP | null;
    age_protect_id(value: CRAHP | null): void;
    circ_sys_id(): number | null;
    circ_sys_id(value: number | null): void;
    owning_lib_id(): number | null;
    owning_lib_id(value: number | null): void;
    owning_sys_id(): number | null;
    owning_sys_id(value: number | null): void;
    inv_workstation_id(): AWS | null;
    inv_workstation_id(value: AWS | null): void;
    circ_lib_shortname(): string | null;
    circ_lib_shortname(value: string | null): void;
    circ_lib_name(): string | null;
    circ_lib_name(value: string | null): void;
    circ_sys_shortname(): string | null;
    circ_sys_shortname(value: string | null): void;
    circ_sys_name(): string | null;
    circ_sys_name(value: string | null): void;
    owning_lib_shortname(): string | null;
    owning_lib_shortname(value: string | null): void;
    owning_lib_name(): string | null;
    owning_lib_name(value: string | null): void;
    owning_sys_shortname(): string | null;
    owning_sys_shortname(value: string | null): void;
    owning_sys_name(): string | null;
    owning_sys_name(value: string | null): void;
    last_circ_datetime(): string | null;
    last_circ_datetime(value: string | null): void;
    last_circ_age_days(): number | null;
    last_circ_age_days(value: number | null): void;
    last_circ_age_months(): number | null;
    last_circ_age_months(value: number | null): void;
    last_circ_age_years(): number | null;
    last_circ_age_years(value: number | null): void;
    last_circ_year(): number | null;
    last_circ_year(value: number | null): void;
    last_circ_year_mon(): string | null;
    last_circ_year_mon(value: string | null): void;
    last_circ_date(): string | null;
    last_circ_date(value: string | null): void;
    last_circ_create_datetime(): string | null;
    last_circ_create_datetime(value: string | null): void;
    last_circ_create_age_days(): number | null;
    last_circ_create_age_days(value: number | null): void;
    last_circ_create_age_months(): number | null;
    last_circ_create_age_months(value: number | null): void;
    last_circ_create_age_years(): number | null;
    last_circ_create_age_years(value: number | null): void;
    last_circ_create_year(): number | null;
    last_circ_create_year(value: number | null): void;
    last_circ_create_year_mon(): string | null;
    last_circ_create_year_mon(value: string | null): void;
    last_circ_create_date(): string | null;
    last_circ_create_date(value: string | null): void;
    create_date_time(): string | null;
    create_date_time(value: string | null): void;
    item_age_days(): number | null;
    item_age_days(value: number | null): void;
    item_age_months(): number | null;
    item_age_months(value: number | null): void;
    item_age_years(): number | null;
    item_age_years(value: number | null): void;
    create_date_year(): number | null;
    create_date_year(value: number | null): void;
    create_date_year_mon(): string | null;
    create_date_year_mon(value: string | null): void;
    create_date_date(): string | null;
    create_date_date(value: string | null): void;
    active_date_time(): string | null;
    active_date_time(value: string | null): void;
    item_active_days(): number | null;
    item_active_days(value: number | null): void;
    item_active_months(): number | null;
    item_active_months(value: number | null): void;
    item_active_years(): number | null;
    item_active_years(value: number | null): void;
    active_date_year(): number | null;
    active_date_year(value: number | null): void;
    active_date_year_mon(): string | null;
    active_date_year_mon(value: string | null): void;
    active_date_date(): string | null;
    active_date_date(value: string | null): void;
    edit_date_time(): string | null;
    edit_date_time(value: string | null): void;
    item_edit_age_days(): number | null;
    item_edit_age_days(value: number | null): void;
    item_edit_age_months(): number | null;
    item_edit_age_months(value: number | null): void;
    item_edit_age_years(): number | null;
    item_edit_age_years(value: number | null): void;
    edit_date_year(): number | null;
    edit_date_year(value: number | null): void;
    edit_date_year_mon(): string | null;
    edit_date_year_mon(value: string | null): void;
    edit_date_date(): string | null;
    edit_date_date(value: string | null): void;
    status_changed_time_time(): string | null;
    status_changed_time_time(value: string | null): void;
    status_changed_year(): number | null;
    status_changed_year(value: number | null): void;
    status_changed_year_mon(): string | null;
    status_changed_year_mon(value: string | null): void;
    status_changed_date(): string | null;
    status_changed_date(value: string | null): void;
    latest_inv_date(): string | null;
    latest_inv_date(value: string | null): void;
    inventory_age_days(): number | null;
    inventory_age_days(value: number | null): void;
    inventory_age_months(): number | null;
    inventory_age_months(value: number | null): void;
    inventory_age_years(): number | null;
    inventory_age_years(value: number | null): void;
    inv_date_year(): number | null;
    inv_date_year(value: number | null): void;
    inv_date_year_mon(): string | null;
    inv_date_year_mon(value: string | null): void;
    inv_date_date(): string | null;
    inv_date_date(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    status(): string | null;
    status(value: string | null): void;
    location_name(): string | null;
    location_name(value: string | null): void;
    circ_modifier_code(): CCM | null;
    circ_modifier_code(value: CCM | null): void;
    circ_modifier_name(): string | null;
    circ_modifier_name(value: string | null): void;
    price(): number | null;
    price(value: number | null): void;
    acq_price(): number | null;
    acq_price(value: number | null): void;
    copy_deleted(): boolean | null;
    copy_deleted(value: boolean | null): void;
    reference(): boolean | null;
    reference(value: boolean | null): void;
    copy_circulate(): boolean | null;
    copy_circulate(value: boolean | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    copy_holdable(): boolean | null;
    copy_holdable(value: boolean | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    copy_opac_visible(): boolean | null;
    copy_opac_visible(value: boolean | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    age_protect(): string | null;
    age_protect(value: string | null): void;
    under_age_protection(): boolean | null;
    under_age_protection(value: boolean | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    copy_number(): number | null;
    copy_number(value: number | null): void;
    circ_as_type(): string | null;
    circ_as_type(value: string | null): void;
    loan_duration_int(): number | null;
    loan_duration_int(value: number | null): void;
    loan_duration(): string | null;
    loan_duration(value: string | null): void;
    fine_level_int(): number | null;
    fine_level_int(value: number | null): void;
    fine_level(): string | null;
    fine_level(value: string | null): void;
    copy_call_number_full(): string | null;
    copy_call_number_full(value: string | null): void;
    copy_call_number_prefix(): string | null;
    copy_call_number_prefix(value: string | null): void;
    copy_call_number_label(): string | null;
    copy_call_number_label(value: string | null): void;
    copy_call_number_suffix(): string | null;
    copy_call_number_suffix(value: string | null): void;
    call_number_dewey(): string | null;
    call_number_dewey(value: string | null): void;
    copy_call_number_sortkey_full(): string | null;
    copy_call_number_sortkey_full(value: string | null): void;
    copy_call_number_prefix_sortkey(): string | null;
    copy_call_number_prefix_sortkey(value: string | null): void;
    copy_call_number_label_sortkey(): string | null;
    copy_call_number_label_sortkey(value: string | null): void;
    copy_call_number_suffix_sortkey(): string | null;
    copy_call_number_suffix_sortkey(value: string | null): void;
    call_number_dewey_block_tens(): string | null;
    call_number_dewey_block_tens(value: string | null): void;
    call_number_dewey_block_hundreds(): string | null;
    call_number_dewey_block_hundreds(value: string | null): void;
    call_number_dewey_range_tens(): string | null;
    call_number_dewey_range_tens(value: string | null): void;
    call_number_dewey_range_hundreds(): string | null;
    call_number_dewey_range_hundreds(value: string | null): void;
    title(): string | null;
    title(value: string | null): void;
    author(): string | null;
    author(value: string | null): void;
    publisher(): string | null;
    publisher(value: string | null): void;
    pubdate(): number | null;
    pubdate(value: number | null): void;
    isbn(): string | null;
    isbn(value: string | null): void;
    issn(): string | null;
    issn(value: string | null): void;
    part_label(): string | null;
    part_label(value: string | null): void;
    part_label_sortkey(): string | null;
    part_label_sortkey(value: string | null): void;
    bib_id(): number | null;
    bib_id(value: number | null): void;
    tcn_value(): string | null;
    tcn_value(value: string | null): void;
    call_deleted(): boolean | null;
    call_deleted(value: boolean | null): void;
    bib_deleted(): boolean | null;
    bib_deleted(value: boolean | null): void;
    status_holdable(): boolean | null;
    status_holdable(value: boolean | null): void;
    location_holdable(): boolean | null;
    location_holdable(value: boolean | null): void;
    location_circulate(): boolean | null;
    location_circulate(value: boolean | null): void;
    inventory_workstation(): string | null;
    inventory_workstation(value: string | null): void;
    est_price(): number | null;
    est_price(value: number | null): void;
    bib_subjects(): string | null;
    bib_subjects(value: string | null): void;
    circ_total(): number | null;
    circ_total(value: number | null): void;
    circ_ytd(): number | null;
    circ_ytd(value: number | null): void;
    circ_last_year(): number | null;
    circ_last_year(value: number | null): void;
    circ_two_years_ago(): number | null;
    circ_two_years_ago(value: number | null): void;
    circ_three_years_ago(): number | null;
    circ_three_years_ago(value: number | null): void;
    circ_last_five_years(): number | null;
    circ_last_five_years(value: number | null): void;
}

export interface SSR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    rel(): number | null;
    rel(value: number | null): void;
    record(): any;
    record(value: any): void;
    total(): number | null;
    total(value: number | null): void;
    checked(): number | null;
    checked(value: number | null): void;
    visible(): number | null;
    visible(value: number | null): void;
    deleted(): number | null;
    deleted(value: number | null): void;
    excluded(): number | null;
    excluded(value: number | null): void;
}

export interface SSSUM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    distribution(): SDIST | null;
    distribution(value: SDIST | null): void;
    generated_coverage(): string | null;
    generated_coverage(value: string | null): void;
    textual_holdings(): string | null;
    textual_holdings(value: string | null): void;
    show_generated(): boolean | null;
    show_generated(value: boolean | null): void;
}

export interface SSTR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    distribution(): SDIST | null;
    distribution(value: SDIST | null): void;
    routing_label(): string | null;
    routing_label(value: string | null): void;
    items(): SITEM | null;
    items(value: SITEM | null): void;
    routing_list_users(): SRLU | null;
    routing_list_users(value: SRLU | null): void;
}

export interface SSUB extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    start_date(): string | null;
    start_date(value: string | null): void;
    end_date(): string | null;
    end_date(value: string | null): void;
    record_entry(): BRE | null;
    record_entry(value: BRE | null): void;
    expected_date_offset(): any;
    expected_date_offset(value: any): void;
    distributions(): SDIST | null;
    distributions(value: SDIST | null): void;
    issuances(): SISS | null;
    issuances(value: SISS | null): void;
    scaps(): SCAP | null;
    scaps(value: SCAP | null): void;
    notes(): SSUBN | null;
    notes(value: SSUBN | null): void;
}

export interface SSUBN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    subscription(): SSUB | null;
    subscription(value: SSUB | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    pub(): boolean | null;
    pub(value: boolean | null): void;
    alert(): boolean | null;
    alert(value: boolean | null): void;
    title(): string | null;
    title(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
}

export interface STGBA extends IdlObject {
    row_id(): number | null;
    row_id(value: number | null): void;
    row_date(): string | null;
    row_date(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
}

export interface STGC extends IdlObject {
    row_id(): number | null;
    row_id(value: number | null): void;
    row_date(): string | null;
    row_date(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
}

export interface STGMA extends IdlObject {
    row_id(): number | null;
    row_id(value: number | null): void;
    row_date(): string | null;
    row_date(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    street1(): string | null;
    street1(value: string | null): void;
    street2(): string | null;
    street2(value: string | null): void;
    city(): string | null;
    city(value: string | null): void;
    county(): string | null;
    county(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    country(): string | null;
    country(value: string | null): void;
    post_code(): string | null;
    post_code(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
}

export interface STGS extends IdlObject {
    row_id(): number | null;
    row_id(value: number | null): void;
    row_date(): string | null;
    row_date(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    setting(): string | null;
    setting(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
}

export interface STGSC extends IdlObject {
    row_id(): number | null;
    row_id(value: number | null): void;
    row_date(): string | null;
    row_date(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    statcat(): string | null;
    statcat(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
}

export interface STGU extends IdlObject {
    row_id(): number | null;
    row_id(value: number | null): void;
    row_date(): string | null;
    row_date(value: string | null): void;
    usrname(): string | null;
    usrname(value: string | null): void;
    profile(): string | null;
    profile(value: string | null): void;
    email(): string | null;
    email(value: string | null): void;
    passwd(): string | null;
    passwd(value: string | null): void;
    ident_type(): number | null;
    ident_type(value: number | null): void;
    first_given_name(): string | null;
    first_given_name(value: string | null): void;
    second_given_name(): string | null;
    second_given_name(value: string | null): void;
    family_name(): string | null;
    family_name(value: string | null): void;
    day_phone(): string | null;
    day_phone(value: string | null): void;
    evening_phone(): string | null;
    evening_phone(value: string | null): void;
    home_ou(): AOU | null;
    home_ou(value: AOU | null): void;
    dob(): string | null;
    dob(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
    requesting_usr(): AU | null;
    requesting_usr(value: AU | null): void;
    pref_first_given_name(): string | null;
    pref_first_given_name(value: string | null): void;
    pref_second_given_name(): string | null;
    pref_second_given_name(value: string | null): void;
    pref_family_name(): string | null;
    pref_family_name(value: string | null): void;
}

export interface SUNIT extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    age_protect(): CRAHP | null;
    age_protect(value: CRAHP | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    call_number(): ACN | null;
    call_number(value: ACN | null): void;
    circ_as_type(): string | null;
    circ_as_type(value: string | null): void;
    circ_lib(): AOU | null;
    circ_lib(value: AOU | null): void;
    circ_modifier(): CCM | null;
    circ_modifier(value: CCM | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    copy_number(): string | null;
    copy_number(value: string | null): void;
    create_date(): string | null;
    create_date(value: string | null): void;
    active_date(): string | null;
    active_date(value: string | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    deleted(): boolean | null;
    deleted(value: boolean | null): void;
    dummy_isbn(): string | null;
    dummy_isbn(value: string | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    dummy_author(): string | null;
    dummy_author(value: string | null): void;
    dummy_title(): string | null;
    dummy_title(value: string | null): void;
    edit_date(): string | null;
    edit_date(value: string | null): void;
    editor(): AU | null;
    editor(value: AU | null): void;
    fine_level(): number | null;
    fine_level(value: number | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    loan_duration(): number | null;
    loan_duration(value: number | null): void;
    location(): ACPL | null;
    location(value: ACPL | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    price(): number | null;
    price(value: number | null): void;
    ref(): boolean | null;
    ref(value: boolean | null): void;
    status(): CCS | null;
    status(value: CCS | null): void;
    status_changed_time(): string | null;
    status_changed_time(value: string | null): void;
    mint_condition(): boolean | null;
    mint_condition(value: boolean | null): void;
    floating(): CFG | null;
    floating(value: CFG | null): void;
    cost(): number | null;
    cost(value: number | null): void;
    sort_key(): string | null;
    sort_key(value: string | null): void;
    summary_contents(): string | null;
    summary_contents(value: string | null): void;
    detailed_contents(): string | null;
    detailed_contents(value: string | null): void;
    notes(): ACPN | null;
    notes(value: ACPN | null): void;
    stat_cat_entry_copy_maps(): ASCECM | null;
    stat_cat_entry_copy_maps(value: ASCECM | null): void;
    circulations(): CIRC | null;
    circulations(value: CIRC | null): void;
    total_circ_count(): ERFCC | null;
    total_circ_count(value: ERFCC | null): void;
    holds(): AHCM | null;
    holds(value: AHCM | null): void;
    stat_cat_entries(): ASCECM | null;
    stat_cat_entries(value: ASCECM | null): void;
}

export interface SVR extends IdlObject {
    sre_id(): string | null;
    sre_id(value: string | null): void;
    location(): string | null;
    location(value: string | null): void;
    owning_lib(): string | null;
    owning_lib(value: string | null): void;
    basic_holdings(): string | null;
    basic_holdings(value: string | null): void;
    basic_holdings_add(): string | null;
    basic_holdings_add(value: string | null): void;
    supplement_holdings(): string | null;
    supplement_holdings(value: string | null): void;
    supplement_holdings_add(): string | null;
    supplement_holdings_add(value: string | null): void;
    index_holdings(): string | null;
    index_holdings(value: string | null): void;
    index_holdings_add(): string | null;
    index_holdings_add(value: string | null): void;
    online(): string | null;
    online(value: string | null): void;
    missing(): string | null;
    missing(value: string | null): void;
    incomplete(): string | null;
    incomplete(value: string | null): void;
}

export interface UVS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    container(): CBREB | null;
    container(value: CBREB | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    search(): string | null;
    search(value: string | null): void;
    selectors(): UVUS | null;
    selectors(value: UVUS | null): void;
    attempts(): UVVA | null;
    attempts(value: UVVA | null): void;
}

export interface UVSA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    session_id(): UVS | null;
    session_id(value: UVS | null): void;
    name(): string | null;
    name(value: string | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    creator(): AU | null;
    creator(value: AU | null): void;
    container(): CBREB | null;
    container(value: CBREB | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    search(): string | null;
    search(value: string | null): void;
    selectors(): string | null;
    selectors(value: string | null): void;
    batch_id(): UVVA | null;
    batch_id(value: UVVA | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    finish_time(): string | null;
    finish_time(value: string | null): void;
}

export interface UVSBREM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    session(): UVS | null;
    session(value: UVS | null): void;
    owning_lib(): AOU | null;
    owning_lib(value: AOU | null): void;
    target_biblio_record_entry(): BRE | null;
    target_biblio_record_entry(value: BRE | null): void;
}

export interface UVU extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    redirect_from(): UVU | null;
    redirect_from(value: UVU | null): void;
    item(): UVSBREM | null;
    item(value: UVSBREM | null): void;
    session(): UVS | null;
    session(value: UVS | null): void;
    url_selector(): UVUS | null;
    url_selector(value: UVUS | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    ord(): number | null;
    ord(value: number | null): void;
    full_url(): string | null;
    full_url(value: string | null): void;
    scheme(): string | null;
    scheme(value: string | null): void;
    host(): string | null;
    host(value: string | null): void;
    domain(): string | null;
    domain(value: string | null): void;
    tld(): string | null;
    tld(value: string | null): void;
    path(): string | null;
    path(value: string | null): void;
    page(): string | null;
    page(value: string | null): void;
    query(): string | null;
    query(value: string | null): void;
    fragment(): string | null;
    fragment(value: string | null): void;
    verifications(): UVUV | null;
    verifications(value: UVUV | null): void;
}

export interface UVUS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    session(): UVS | null;
    session(value: UVS | null): void;
    urls(): UVU | null;
    urls(value: UVU | null): void;
}

export interface UVUV extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    url(): UVU | null;
    url(value: UVU | null): void;
    attempt(): UVVA | null;
    attempt(value: UVVA | null): void;
    req_time(): string | null;
    req_time(value: string | null): void;
    res_time(): string | null;
    res_time(value: string | null): void;
    res_code(): number | null;
    res_code(value: number | null): void;
    res_text(): string | null;
    res_text(value: string | null): void;
    redirect_to(): UVU | null;
    redirect_to(value: UVU | null): void;
}

export interface UVVA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    session(): UVS | null;
    session(value: UVS | null): void;
    start_time(): string | null;
    start_time(value: string | null): void;
    finish_time(): string | null;
    finish_time(value: string | null): void;
}

export interface VAM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    queued_record(): VQAR | null;
    queued_record(value: VQAR | null): void;
    eg_record(): ARE | null;
    eg_record(value: ARE | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    match_score(): string | null;
    match_score(value: string | null): void;
}

export interface VAQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
    queue_type(): string | null;
    queue_type(value: string | null): void;
    match_set(): VMS | null;
    match_set(value: VMS | null): void;
}

export interface VBI extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AU | null;
    owner(value: AU | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    email(): string | null;
    email(value: string | null): void;
    import_type(): string | null;
    import_type(value: string | null): void;
    params(): string | null;
    params(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    request_time(): string | null;
    request_time(value: string | null): void;
    complete_time(): string | null;
    complete_time(value: string | null): void;
    queue(): number | null;
    queue(value: number | null): void;
}

export interface VBM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    queued_record(): VQBR | null;
    queued_record(value: VQBR | null): void;
    eg_record(): BRE | null;
    eg_record(value: BRE | null): void;
    quality(): string | null;
    quality(value: string | null): void;
    match_score(): string | null;
    match_score(value: string | null): void;
}

export interface VBQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    complete(): boolean | null;
    complete(value: boolean | null): void;
    queue_type(): string | null;
    queue_type(value: string | null): void;
    match_set(): VMS | null;
    match_set(value: VMS | null): void;
    item_attr_def(): VIIAD | null;
    item_attr_def(value: VIIAD | null): void;
    match_bucket(): CBREB | null;
    match_bucket(value: CBREB | null): void;
}

export interface VIBTF extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    grp(): VIBTG | null;
    grp(value: VIBTG | null): void;
    field(): string | null;
    field(value: string | null): void;
}

export interface VIBTG extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    label(): string | null;
    label(value: string | null): void;
    always_apply(): boolean | null;
    always_apply(value: boolean | null): void;
    import_bib_trash_fields(): VIBTF | null;
    import_bib_trash_fields(value: VIBTF | null): void;
}

export interface VIE extends IdlObject {
    code(): number | null;
    code(value: number | null): void;
    description(): string | null;
    description(value: string | null): void;
}

export interface VII extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    record(): VQBR | null;
    record(value: VQBR | null): void;
    definition(): VIIAD | null;
    definition(value: VIIAD | null): void;
    import_error(): VIE | null;
    import_error(value: VIE | null): void;
    error_detail(): string | null;
    error_detail(value: string | null): void;
    imported_as(): ACP | null;
    imported_as(value: ACP | null): void;
    import_time(): string | null;
    import_time(value: string | null): void;
    owning_lib(): number | null;
    owning_lib(value: number | null): void;
    circ_lib(): number | null;
    circ_lib(value: number | null): void;
    call_number(): string | null;
    call_number(value: string | null): void;
    copy_number(): number | null;
    copy_number(value: number | null): void;
    status(): number | null;
    status(value: number | null): void;
    location(): number | null;
    location(value: number | null): void;
    circulate(): boolean | null;
    circulate(value: boolean | null): void;
    deposit(): boolean | null;
    deposit(value: boolean | null): void;
    deposit_amount(): number | null;
    deposit_amount(value: number | null): void;
    ref(): boolean | null;
    ref(value: boolean | null): void;
    holdable(): boolean | null;
    holdable(value: boolean | null): void;
    price(): number | null;
    price(value: number | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    circ_modifier(): string | null;
    circ_modifier(value: string | null): void;
    circ_as_type(): string | null;
    circ_as_type(value: string | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    pub_note(): string | null;
    pub_note(value: string | null): void;
    priv_note(): string | null;
    priv_note(value: string | null): void;
    opac_visible(): boolean | null;
    opac_visible(value: boolean | null): void;
    internal_id(): number | null;
    internal_id(value: number | null): void;
    stat_cat_data(): string | null;
    stat_cat_data(value: string | null): void;
    parts_data(): string | null;
    parts_data(value: string | null): void;
}

export interface VIIAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    owning_lib(): string | null;
    owning_lib(value: string | null): void;
    circ_lib(): string | null;
    circ_lib(value: string | null): void;
    call_number(): string | null;
    call_number(value: string | null): void;
    status(): string | null;
    status(value: string | null): void;
    location(): string | null;
    location(value: string | null): void;
    circulate(): string | null;
    circulate(value: string | null): void;
    deposit(): string | null;
    deposit(value: string | null): void;
    deposit_amount(): string | null;
    deposit_amount(value: string | null): void;
    ref(): string | null;
    ref(value: string | null): void;
    holdable(): string | null;
    holdable(value: string | null): void;
    price(): string | null;
    price(value: string | null): void;
    barcode(): string | null;
    barcode(value: string | null): void;
    circ_modifier(): string | null;
    circ_modifier(value: string | null): void;
    circ_as_type(): string | null;
    circ_as_type(value: string | null): void;
    alert_message(): string | null;
    alert_message(value: string | null): void;
    pub_note(): string | null;
    pub_note(value: string | null): void;
    priv_note(): string | null;
    priv_note(value: string | null): void;
    opac_visible(): string | null;
    opac_visible(value: string | null): void;
    copy_number(): string | null;
    copy_number(value: string | null): void;
    internal_id(): string | null;
    internal_id(value: string | null): void;
    stat_cat_data(): string | null;
    stat_cat_data(value: string | null): void;
    parts_data(): string | null;
    parts_data(value: string | null): void;
}

export interface VMP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    name(): string | null;
    name(value: string | null): void;
    add_spec(): string | null;
    add_spec(value: string | null): void;
    replace_spec(): string | null;
    replace_spec(value: string | null): void;
    strip_spec(): string | null;
    strip_spec(value: string | null): void;
    preserve_spec(): string | null;
    preserve_spec(value: string | null): void;
    lwm_ratio(): number | null;
    lwm_ratio(value: number | null): void;
    update_bib_source(): boolean | null;
    update_bib_source(value: boolean | null): void;
    update_bib_editor(): boolean | null;
    update_bib_editor(value: boolean | null): void;
}

export interface VMS extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    name(): string | null;
    name(value: string | null): void;
    owner(): AOU | null;
    owner(value: AOU | null): void;
    mtype(): string | null;
    mtype(value: string | null): void;
}

export interface VMSP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parent(): VMSP | null;
    parent(value: VMSP | null): void;
    match_set(): VMS | null;
    match_set(value: VMS | null): void;
    bool_op(): string | null;
    bool_op(value: string | null): void;
    svf(): CRAD | null;
    svf(value: CRAD | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
    quality(): number | null;
    quality(value: number | null): void;
    children(): VMSP | null;
    children(value: VMSP | null): void;
    heading(): boolean | null;
    heading(value: boolean | null): void;
}

export interface VMSQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    match_set(): VMS | null;
    match_set(value: VMS | null): void;
    svf(): string | null;
    svf(value: string | null): void;
    tag(): string | null;
    tag(value: string | null): void;
    subfield(): string | null;
    subfield(value: string | null): void;
    value(): string | null;
    value(value: string | null): void;
    quality(): number | null;
    quality(value: number | null): void;
}

export interface VQAR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    import_time(): string | null;
    import_time(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    queue(): VAQ | null;
    queue(value: VAQ | null): void;
    imported_as(): ARE | null;
    imported_as(value: ARE | null): void;
    import_error(): VIE | null;
    import_error(value: VIE | null): void;
    error_detail(): string | null;
    error_detail(value: string | null): void;
    purpose(): string | null;
    purpose(value: string | null): void;
    attributes(): VQARA | null;
    attributes(value: VQARA | null): void;
    matches(): VAM | null;
    matches(value: VAM | null): void;
    quality(): number | null;
    quality(value: number | null): void;
}

export interface VQARA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    record(): VQAR | null;
    record(value: VQAR | null): void;
    field(): VQARAD | null;
    field(value: VQARAD | null): void;
    attr_value(): string | null;
    attr_value(value: string | null): void;
}

export interface VQARAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    remove(): string | null;
    remove(value: string | null): void;
}

export interface VQBR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    import_time(): string | null;
    import_time(value: string | null): void;
    marc(): string | null;
    marc(value: string | null): void;
    queue(): VBQ | null;
    queue(value: VBQ | null): void;
    bib_source(): CBS | null;
    bib_source(value: CBS | null): void;
    imported_as(): BRE | null;
    imported_as(value: BRE | null): void;
    import_error(): VIE | null;
    import_error(value: VIE | null): void;
    error_detail(): string | null;
    error_detail(value: string | null): void;
    purpose(): string | null;
    purpose(value: string | null): void;
    attributes(): VQBRA | null;
    attributes(value: VQBRA | null): void;
    matches(): VBM | null;
    matches(value: VBM | null): void;
    import_items(): VII | null;
    import_items(value: VII | null): void;
    quality(): number | null;
    quality(value: number | null): void;
}

export interface VQBRA extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    record(): VQBR | null;
    record(value: VQBR | null): void;
    field(): VQBRAD | null;
    field(value: VQBRAD | null): void;
    attr_value(): string | null;
    attr_value(value: string | null): void;
}

export interface VQBRAD extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    code(): string | null;
    code(value: string | null): void;
    description(): string | null;
    description(value: string | null): void;
    xpath(): string | null;
    xpath(value: string | null): void;
    remove(): string | null;
    remove(value: string | null): void;
}

export interface VST extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    session_key(): string | null;
    session_key(value: string | null): void;
    name(): string | null;
    name(value: string | null): void;
    usr(): AU | null;
    usr(value: AU | null): void;
    workstation(): AWS | null;
    workstation(value: AWS | null): void;
    record_type(): string | null;
    record_type(value: string | null): void;
    queue(): number | null;
    queue(value: number | null): void;
    create_time(): string | null;
    create_time(value: string | null): void;
    update_time(): string | null;
    update_time(value: string | null): void;
    state(): string | null;
    state(value: string | null): void;
    action_type(): string | null;
    action_type(value: string | null): void;
    total_actions(): number | null;
    total_actions(value: number | null): void;
    actions_performed(): number | null;
    actions_performed(value: number | null): void;
}

export interface XBET extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XBIND extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    bind_variable(): QBV | null;
    bind_variable(value: QBV | null): void;
}

export interface XBOOL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    literal(): string | null;
    literal(value: string | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XCASE extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XCAST extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    cast_type(): QDT | null;
    cast_type(value: QDT | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XCOL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    table_alias(): string | null;
    table_alias(value: string | null): void;
    column_name(): string | null;
    column_name(value: string | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XEX extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    subquery(): QSQ | null;
    subquery(value: QSQ | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XFUNC extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    column_name(): string | null;
    column_name(value: string | null): void;
    function_id(): QFS | null;
    function_id(value: QFS | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XIN extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    subquery(): QSQ | null;
    subquery(value: QSQ | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XISNULL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XNULL extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XNUM extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    literal(): string | null;
    literal(value: string | null): void;
}

export interface XOP extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    left_operand(): QXP | null;
    left_operand(value: QXP | null): void;
    operator(): string | null;
    operator(value: string | null): void;
    right_operand(): QXP | null;
    right_operand(value: QXP | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XSER extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    operator(): string | null;
    operator(value: string | null): void;
    negate(): boolean | null;
    negate(value: boolean | null): void;
}

export interface XSTR extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    literal(): string | null;
    literal(value: string | null): void;
}

export interface XSUBQ extends IdlObject {
    id(): number | null;
    id(value: number | null): void;
    parenthesize(): boolean | null;
    parenthesize(value: boolean | null): void;
    parent_expr(): QXP | null;
    parent_expr(value: QXP | null): void;
    seq_no(): number | null;
    seq_no(value: number | null): void;
    subquery(): QSQ | null;
    subquery(value: QSQ | null): void;
}

/**
 * Mapping of IDL class names to their corresponding interfaces
 */
export interface IdlClassMapping {
  /**  Circ-Archived Patron Statistical Category Entries */
  "aaactsc": AAACTSC;
  /**  Circ-Archived Item Statistical Category Entries */
  "aaasc": AAASC;
  /**  Active Item Alert */
  "aaca": AACA;
  /**  All Circulation Combined Types */
  "aacct": AACCT;
  /**  Combined Aged and Active Circulations (Slim Version) */
  "aacs": AACS;
  /**  Aged Hold Request */
  "aahr": AAHR;
  /**  Address Alert */
  "aal": AAL;
  /**  Authority to Authority Linking */
  "aalink": AALINK;
  /**  Authority Browse Axis */
  "aba": ABA;
  /**  Authority Browse Axis Field Map */
  "abaafm": ABAAFM;
  /**  Hold Group Event */
  "abhe": ABHE;
  /**  Hold Group Event Map */
  "abhem": ABHEM;
  /**  Authority-Bibliographic Record Link */
  "abl": ABL;
  /**  Library Card */
  "ac": AC;
  /**  Item Alert */
  "aca": ACA;
  /**  Item Alert Suppression */
  "acas": ACAS;
  /**  Circulation Chain Summary */
  "accs": ACCS;
  /**  Item Inventory */
  "aci": ACI;
  /**  Aged (patronless) Circulation */
  "acirc": ACIRC;
  /**  Course */
  "acmc": ACMC;
  /**  Course Materials */
  "acmcm": ACMCM;
  /**  Course Users */
  "acmcu": ACMCU;
  /**  Course Role */
  "acmr": ACMR;
  /**  Term */
  "acmt": ACMT;
  /**  Course Term Map */
  "acmtcm": ACMTCM;
  /**  Call Number/Volume */
  "acn": ACN;
  /**  Call number classification scheme */
  "acnc": ACNC;
  /**  Call Number Note */
  "acnn": ACNN;
  /**  Call Number/Volume Prefix */
  "acnp": ACNP;
  /**  Call Number/Volume Suffix */
  "acns": ACNS;
  /**  Item */
  "acp": ACP;
  /**  Shelving Location */
  "acpl": ACPL;
  /**  Item/Shelving Location Group */
  "acplg": ACPLG;
  /**  Item/Shelving Location Group Map */
  "acplgm": ACPLGM;
  /**  Item/Shelving Location Order */
  "acplo": ACPLO;
  /**  Item Monograph Part Map */
  "acpm": ACPM;
  /**  Item Note */
  "acpn": ACPN;
  /**  Item Tags */
  "acpt": ACPT;
  /**  Item Tag Item Map */
  "acptcm": ACPTCM;
  /**  All Fund Allocation Total */
  "acqafat": ACQAFAT;
  /**  All Fund Combined Total */
  "acqafcb": ACQAFCB;
  /**  All Fund Encumbrance Total */
  "acqafet": ACQAFET;
  /**  All Fund Spent Balance */
  "acqafsb": ACQAFSB;
  /**  All Fund Spent Total */
  "acqafst": ACQAFST;
  /**  Claim */
  "acqcl": ACQCL;
  /**  Claim Event */
  "acqcle": ACQCLE;
  /**  Claim Event Type */
  "acqclet": ACQCLET;
  /**  Claim Policy */
  "acqclp": ACQCLP;
  /**  Claim Policy Action */
  "acqclpa": ACQCLPA;
  /**  Claim Policy Action Org Unit View */
  "acqclpaouv": ACQCLPAOUV;
  /**  Claim Type */
  "acqclt": ACQCLT;
  /**  Cancel Reason */
  "acqcr": ACQCR;
  /**  Currency Type */
  "acqct": ACQCT;
  /**  Debit Attribution */
  "acqda": ACQDA;
  /**  Distribution Formula */
  "acqdf": ACQDF;
  /**  Distribution Formula Application */
  "acqdfa": ACQDFA;
  /**  Distribution Formula Entry */
  "acqdfe": ACQDFE;
  /**  EDI Account */
  "acqedi": ACQEDI;
  /**  EDI Message */
  "acqedim": ACQEDIM;
  /**  Exchange Rate */
  "acqexr": ACQEXR;
  /**  Fund */
  "acqf": ACQF;
  /**  Fund Allocation */
  "acqfa": ACQFA;
  /**  Fund Allocation Percent */
  "acqfap": ACQFAP;
  /**  Fund Allocation Total */
  "acqfat": ACQFAT;
  /**  Fiscal Calendar */
  "acqfc": ACQFC;
  /**  Fund Combined Balance */
  "acqfcb": ACQFCB;
  /**  Debit From Fund */
  "acqfdeb": ACQFDEB;
  /**  Total Debit from Fund */
  "acqfdt": ACQFDT;
  /**  Total Fund Encumbrance */
  "acqfet": ACQFET;
  /**  Funding Source */
  "acqfs": ACQFS;
  /**  Fund Spent Balance */
  "acqfsb": ACQFSB;
  /**  Credit to Funding Source */
  "acqfscred": ACQFSCRED;
  /**  Total Allocation to Funding Source */
  "acqfsrcat": ACQFSRCAT;
  /**  Funding Source Balance */
  "acqfsrcb": ACQFSRCB;
  /**  Total Credit to Funding Source */
  "acqfsrcct": ACQFSRCCT;
  /**  Total Spent from Fund */
  "acqfst": ACQFST;
  /**  Fund Summary */
  "acqfsum": ACQFSUM;
  /**  Fund Tag */
  "acqft": ACQFT;
  /**  Fund Tag Map */
  "acqftm": ACQFTM;
  /**  Fund Transfer */
  "acqftr": ACQFTR;
  /**  Fiscal Year */
  "acqfy": ACQFY;
  /**  Invoice Entry */
  "acqie": ACQIE;
  /**  Non-bibliographic Invoice Item */
  "acqii": ACQII;
  /**  Invoice Method used by Vendor */
  "acqim": ACQIM;
  /**  Invoice */
  "acqinv": ACQINV;
  /**  Invoice Payment Method */
  "acqipm": ACQIPM;
  /**  Line Item Attribute */
  "acqlia": ACQLIA;
  /**  Line Item Attribute Definition */
  "acqliad": ACQLIAD;
  /**  Line Item Alert Text */
  "acqliat": ACQLIAT;
  /**  Line Item Detail */
  "acqlid": ACQLID;
  /**  Line Item Generated Attribute Definition */
  "acqligad": ACQLIGAD;
  /**  Line Item History */
  "acqlih": ACQLIH;
  /**  Line Item Local Attribute Definition */
  "acqlilad": ACQLILAD;
  /**  Line Item MARC Attribute Definition */
  "acqlimad": ACQLIMAD;
  /**  Line Item Note */
  "acqlin": ACQLIN;
  /**  Line Item Provider Attribute Definition */
  "acqlipad": ACQLIPAD;
  /**  Lineitem Summary */
  "acqlisum": ACQLISUM;
  /**  Invoiceable Lineitem Summary */
  "acqlisumi": ACQLISUMI;
  /**  Line Item User Attribute Definition */
  "acqliuad": ACQLIUAD;
  /**  Acq Map to Invoice View */
  "acqmapinv": ACQMAPINV;
  /**  Ordered Funding Source Credit */
  "acqofscred": ACQOFSCRED;
  /**  Provider Address */
  "acqpa": ACQPA;
  /**  Provider Contact */
  "acqpc": ACQPC;
  /**  Provider Contact Address */
  "acqpca": ACQPCA;
  /**  Provider Holding Subfield Map */
  "acqphsm": ACQPHSM;
  /**  Selection List */
  "acqpl": ACQPL;
  /**  Purchase Order */
  "acqpo": ACQPO;
  /**  Purchase Order History */
  "acqpoh": ACQPOH;
  /**  Purchase Order Item */
  "acqpoi": ACQPOI;
  /**  PO Note */
  "acqpon": ACQPON;
  /**  PO State Labels */
  "acqpostlbl": ACQPOSTLBL;
  /**  Provider */
  "acqpro": ACQPRO;
  /**  Provider Note */
  "acqpron": ACQPRON;
  /**  Invoice Debits by Fund */
  "acqr_debit_by_fund": ACQR_DEBIT_BY_FUND;
  /**  Invoice Debits by Fund Tag */
  "acqr_debit_by_fund_tag": ACQR_DEBIT_BY_FUND_TAG;
  /**  Invoice Totals */
  "acqr_inv_totals": ACQR_INV_TOTALS;
  /**  Serial Claim */
  "acqscl": ACQSCL;
  /**  Serial Claim Event */
  "acqscle": ACQSCLE;
  /**  Shipment Notification */
  "acqsn": ACQSN;
  /**  Shipment Notification Entry */
  "acqsne": ACQSNE;
  /**  Claim Ready Lineitem Details */
  "acrlid": ACRLID;
  /**  Authority Control Set */
  "acs": ACS;
  /**  Authority Control Set Authority Field */
  "acsaf": ACSAF;
  /**  Authority Control Set Bib Field */
  "acsbf": ACSBF;
  /**  Authority Control Set Bib Field to Metabib Field Map */
  "acsbfmfm": ACSBFMFM;
  /**  Curbside Appointment Slot */
  "acsp": ACSP;
  /**  Asset Item Template */
  "act": ACT;
  /**  User Statistical Category */
  "actsc": ACTSC;
  /**  User Stat Cat Entry */
  "actsce": ACTSCE;
  /**  User Statistical Category Entry */
  "actscecm": ACTSCECM;
  /**  User Stat Cat Default Entry */
  "actsced": ACTSCED;
  /**  SIP Statistical Category Field Identifier */
  "actscsf": ACTSCSF;
  /**  EDI Attribute */
  "aea": AEA;
  /**  EDI Attribute Set */
  "aeas": AEAS;
  /**  EDI Attribute Set Map */
  "aeasm": AEASM;
  /**  Emergency Closing */
  "aec": AEC;
  /**  Emergency Closing Circulation Entry */
  "aecc": AECC;
  /**  Emergency Closing Hold Entry */
  "aech": AECH;
  /**  Emergency Closing Reservation Entry */
  "aecr": AECR;
  /**  Emergency Closing Status */
  "aecs": AECS;
  /**  Full Authority Record */
  "afr": AFR;
  /**  Fieldset */
  "afs": AFS;
  /**  Fieldset Column Value */
  "afscv": AFSCV;
  /**  Fieldset Group */
  "afsg": AFSG;
  /**  Hold Item Map */
  "ahcm": AHCM;
  /**  Authority Heading Fields */
  "ahf": AHF;
  /**  Hold Notification */
  "ahn": AHN;
  /**  Hold On Pull List */
  "ahopl": AHOPL;
  /**  Hold Request */
  "ahr": AHR;
  /**  Hold Request Cancel Cause */
  "ahrcc": AHRCC;
  /**  Hold Request Note */
  "ahrn": AHRN;
  /**  Hold Request Reset Reason */
  "ahrrr": AHRRR;
  /**  Hold Request Reset Reason Entry */
  "ahrrre": AHRRRE;
  /**  Hold Transit */
  "ahtc": AHTC;
  /**  In House Use */
  "aihu": AIHU;
  /**  Non-bibliographic Invoice Item Type */
  "aiit": AIIT;
  /**  Latest Inventory */
  "alci": ALCI;
  /**  Last Captured Hold Request */
  "alhr": ALHR;
  /**  Matrix Test Result */
  "amtr": AMTR;
  /**  Non-cataloged Circulation */
  "ancc": ANCC;
  /**  Non-cataloged In House Use */
  "ancihu": ANCIHU;
  /**  Org Address */
  "aoa": AOA;
  /**  Open Circulation */
  "aoc": AOC;
  /**  Open Non-cataloged Circulation */
  "aoncc": AONCC;
  /**  Organizational Unit */
  "aou": AOU;
  /**  Closed Dates */
  "aoucd": AOUCD;
  /**  Org Unit Custom Tree */
  "aouct": AOUCT;
  /**  Org Unit Custom Tree Node */
  "aouctn": AOUCTN;
  /**  Hours of Operation */
  "aouhoo": AOUHOO;
  /**  Org Unit Proximity */
  "aoup": AOUP;
  /**  Org Unit Proximity Adjustment */
  "aoupa": AOUPA;
  /**  Organizational Unit Setting */
  "aous": AOUS;
  /**  Organizational Unit Type */
  "aout": AOUT;
  /**  Patron Loader Log */
  "apll": APLL;
  /**  Authority Record Descriptor */
  "ard": ARD;
  /**  Authority Record Entry */
  "are": ARE;
  /**  Authority Record Note */
  "arn": ARN;
  /**  Reservation Transit */
  "artc": ARTC;
  /**  Asset Statistical Category */
  "asc": ASC;
  /**  Item Stat Cat Entry */
  "asce": ASCE;
  /**  Statistical Category Entry Item Map */
  "ascecm": ASCECM;
  /**  SIP Statistical Category Field Identifier */
  "ascsf": ASCSF;
  /**  Search Filter Group */
  "asfg": ASFG;
  /**  Search Filter Group Entry */
  "asfge": ASFGE;
  /**  Authority Simple Heading */
  "ash": ASH;
  /**  Search Query */
  "asq": ASQ;
  /**  Survey */
  "asv": ASV;
  /**  Survey Answer */
  "asva": ASVA;
  /**  User Survey Question */
  "asvq": ASVQ;
  /**  Survey Response */
  "asvr": ASVR;
  /**  Authority Thesaurus */
  "at": AT;
  /**  Custom Toolbar */
  "atb": ATB;
  /**  Item Transit */
  "atc": ATC;
  /**  Trigger Event Cleanup */
  "atclean": ATCLEAN;
  /**  Trigger Environment Collector */
  "atcol": ATCOL;
  /**  Trigger Event Environment Entry */
  "atenv": ATENV;
  /**  Event Output */
  "ateo": ATEO;
  /**  Trigger Event Entry */
  "atev": ATEV;
  /**  Alternate Action Trigger Templates */
  "atevalt": ATEVALT;
  /**  Trigger Event Definition */
  "atevdef": ATEVDEF;
  /**  Trigger Event Definition Group */
  "atevdefg": ATEVDEFG;
  /**  Trigger Event Definition Group Member */
  "atevdefgm": ATEVDEFGM;
  /**  Trigger Event Parameter */
  "atevparam": ATEVPARAM;
  /**  Trigger Hook Point */
  "ath": ATH;
  /**  Action Trigger Optimized User Log */
  "atoul": ATOUL;
  /**  Trigger Event Reactor */
  "atreact": ATREACT;
  /**  Action Trigger User Log */
  "atul": ATUL;
  /**  Trigger Condition Validator */
  "atval": ATVAL;
  /**  ILS User */
  "au": AU;
  /**  User Address */
  "aua": AUA;
  /**  User Activity */
  "auact": AUACT;
  /**  User Checkout History */
  "auch": AUCH;
  /**  Unfulfilled Hold Targets */
  "aufh": AUFH;
  /**  */
  "aufhil": AUFHIL;
  /**  */
  "aufhl": AUFHL;
  /**  */
  "aufhml": AUFHML;
  /**  */
  "aufhmxl": AUFHMXL;
  /**  */
  "aufhol": AUFHOL;
  /**  User Message */
  "aum": AUM;
  /**  MFA User Factor Map */
  "aumfm": AUMFM;
  /**  User Message (Limited Access) */
  "auml": AUML;
  /**  User Message Penalty */
  "aump": AUMP;
  /**  MFA User Exception */
  "aumx": AUMX;
  /**  User Sharing Opt-in */
  "auoi": AUOI;
  /**  User password reset requests */
  "aupr": AUPR;
  /**  Privacy Waiver */
  "aupw": AUPW;
  /**  User Purchase Request */
  "aur": AUR;
  /**  Electronic Access URI */
  "auri": AURI;
  /**  Electronic Access URI to Call Number Map */
  "auricnm": AURICNM;
  /**  User Purchase Request with Status */
  "aurs": AURS;
  /**  Acquisition Patron Request Status Type */
  "aurst": AURST;
  /**  User Purchase Request Type */
  "aurt": AURT;
  /**  User Setting */
  "aus": AUS;
  /**  User Standing Penalty */
  "ausp": AUSP;
  /**  User Saved Search */
  "auss": AUSS;
  /**  Workstation */
  "aws": AWS;
  /**  Workstation Setting */
  "awss": AWSS;
  /**  Monograph Parts */
  "bmp": BMP;
  /**  MARC21 Physical Characteristics */
  "bmpc": BMPC;
  /**  Bibliographic Record Peer Item Map */
  "bpbcm": BPBCM;
  /**  Bibliographic Record Peer Type */
  "bpt": BPT;
  /**  Resource Attribute */
  "bra": BRA;
  /**  Resource Attribute Map */
  "bram": BRAM;
  /**  Resource Attribute Value */
  "brav": BRAV;
  /**  Reservation Attribute Value Map */
  "bravm": BRAVM;
  /**  Bibliographic Record */
  "bre": BRE;
  /**  Bib Record Note */
  "bren": BREN;
  /**  Reservation */
  "bresv": BRESV;
  /**  Record Node */
  "brn": BRN;
  /**  Resource */
  "brsrc": BRSRC;
  /**  Resource Type */
  "brt": BRT;
  /**  Audience Map */
  "cam": CAM;
  /**  Barcode Completions */
  "cbc": CBC;
  /**  Fingerprint Definition */
  "cbfp": CBFP;
  /**  Best-Hold Sort Order */
  "cbho": CBHO;
  /**  Bib Level Map */
  "cblvl": CBLVL;
  /**  Bibliographic Record Entry Bucket */
  "cbreb": CBREB;
  /**  Biblio Record Entry Bucket Item */
  "cbrebi": CBREBI;
  /**  Biblio Record Entry Bucket Item Note */
  "cbrebin": CBREBIN;
  /**  Bibliographic Record Entry Bucket Note */
  "cbrebn": CBREBN;
  /**  Bibliographic Record Entry Bucket Share Mapping */
  "cbrebs": CBREBS;
  /**  Bibliographic Record Bucket Type */
  "cbrebt": CBREBT;
  /**  Bibliographic Record Entry Bucket User Flag Mapping */
  "cbrebuf": CBREBUF;
  /**  Bib Source */
  "cbs": CBS;
  /**  Billing Type */
  "cbt": CBT;
  /**  Carousels */
  "cc": CC;
  /**  Item Alert Type */
  "ccat": CCAT;
  /**  Item Bucket */
  "ccb": CCB;
  /**  Item Bucket Item */
  "ccbi": CCBI;
  /**  Item Bucket Item Note */
  "ccbin": CCBIN;
  /**  Item Bucket Note */
  "ccbn": CCBN;
  /**  Circulation Limit Group */
  "cclg": CCLG;
  /**  Circulation Limit Set */
  "ccls": CCLS;
  /**  Circulation Limit Set Shelving Location Map */
  "cclsacpl": CCLSACPL;
  /**  Circulation Limit Set Circ Mod Map */
  "cclscmm": CCLSCMM;
  /**  Circulation Limit Set Group Map */
  "cclsgm": CCLSGM;
  /**  Circulation Modifier */
  "ccm": CCM;
  /**  Circulation Matrix Limit Set Map */
  "ccmlsm": CCMLSM;
  /**  Circulation Matrix Matchpoint */
  "ccmm": CCMM;
  /**  Circ Matrix Weights */
  "ccmw": CCMW;
  /**  Call Number Bucket */
  "ccnb": CCNB;
  /**  Call Number Bucket Item */
  "ccnbi": CCNBI;
  /**  Call Number Bucket Item Note */
  "ccnbin": CCNBIN;
  /**  Call Number Bucket Note */
  "ccnbn": CCNBN;
  /**  Call Number Bucket Type */
  "ccnbt": CCNBT;
  /**  Carousels Visible at Library */
  "ccou": CCOU;
  /**  Item Bucket Type */
  "ccpbt": CCPBT;
  /**  Composite Attribute Definitions */
  "ccraed": CCRAED;
  /**  Item Status */
  "ccs": CCS;
  /**  Carousel Types */
  "cct": CCT;
  /**  Item Tag Types */
  "cctt": CCTT;
  /**  SVF Record Attribute Coded Value Map */
  "ccvm": CCVM;
  /**  Display Field Map */
  "cdfm": CDFM;
  /**  FilterDialog Filter Set */
  "cfdfs": CFDFS;
  /**  FilterDialog Interface */
  "cfdi": CFDI;
  /**  Floating Group */
  "cfg": CFG;
  /**  Floating Group Members */
  "cfgm": CFGM;
  /**  Global Flags and Settings */
  "cgf": CGF;
  /**  Geographic Location Service */
  "cgs": CGS;
  /**  Hard Due Date */
  "chdd": CHDD;
  /**  Hard Due Date Values */
  "chddv": CHDDV;
  /**  Hold Matrix Matchpoint */
  "chmm": CHMM;
  /**  Hold Matrix Weights */
  "chmw": CHMW;
  /**  Hold Type */
  "cht": CHT;
  /**  Item Form Map */
  "cifm": CIFM;
  /**  Indexing Normalizer */
  "cin": CIN;
  /**  Circulation */
  "circ": CIRC;
  /**  */
  "circbyyr": CIRCBYYR;
  /**  Identification Type */
  "cit": CIT;
  /**  Item Type Map */
  "citm": CITM;
  /**  Literary Form */
  "clfm": CLFM;
  /**  Language Map */
  "clm": CLM;
  /**  Metabib Class */
  "cmc": CMC;
  /**  Metabib Class TS Map */
  "cmcts": CMCTS;
  /**  Metabib Field */
  "cmf": CMF;
  /**  Metabib Field to Indexing Normalizer Map */
  "cmfinm": CMFINM;
  /**  MARC21 Fixed Field Map */
  "cmfpm": CMFPM;
  /**  Metabib Field TS Map */
  "cmfts": CMFTS;
  /**  Metabib Field Virtual Map */
  "cmfvm": CMFVM;
  /**  MARC21 Physical Characteristic Subfield Map */
  "cmpcsm": CMPCSM;
  /**  MARC21 Physical Characteristic Type Map */
  "cmpctm": CMPCTM;
  /**  MARC21 Physical Characteristic Value Map */
  "cmpcvm": CMPCVM;
  /**  MARC Fields */
  "cmrcfld": CMRCFLD;
  /**  MARC Formats */
  "cmrcfmt": CMRCFMT;
  /**  MARC Subfields */
  "cmrcsubfld": CMRCSUBFLD;
  /**  MARC21 Record Type Map */
  "cmrtm": CMRTM;
  /**  Metabib Search Alias */
  "cmsa": CMSA;
  /**  Net Access Level */
  "cnal": CNAL;
  /**  Non-cataloged Type */
  "cnct": CNCT;
  /**  Sign-on to OpenAthens */
  "coai": COAI;
  /**  OpenAthens name fields */
  "coanf": COANF;
  /**  OpenAthens unique identifiers */
  "coauf": COAUF;
  /**  Combined (Active & Aged) Hold Request */
  "combahr": COMBAHR;
  /**  Combined Aged and Active Circulations */
  "combcirc": COMBCIRC;
  /**  Organizational Unit Setting Type */
  "coust": COUST;
  /**  Organizational Unit Setting Type Log */
  "coustl": COUSTL;
  /**  Patron Loader Header Mappings */
  "cplhm": CPLHM;
  /**  Patron Loader Value Mappings */
  "cplvm": CPLVM;
  /**  Print Templates */
  "cpt": CPT;
  /**  Remote Patron Authentication Configuration Profile */
  "cra": CRA;
  /**  Remote (3rd party) Account */
  "cracct": CRACCT;
  /**  SVF Record Attribute Defintion */
  "crad": CRAD;
  /**  Age Hold Protection Rule */
  "crahp": CRAHP;
  /**  SVF Record Attribute to Indexing Normalizer Map */
  "crainm": CRAINM;
  /**  Circulation Duration Rule */
  "crcd": CRCD;
  /**  Max Fine Rule */
  "crmf": CRMF;
  /**  Recurring Fine Rule */
  "crrf": CRRF;
  /**  SMS Carrier */
  "csc": CSC;
  /**  Settings Group */
  "csg": CSG;
  /**  Standing Penalty */
  "csp": CSP;
  /**  Standing Penalty */
  "cst": CST;
  /**  Text Search Configs */
  "ctcl": CTCL;
  /**  User Activity Type */
  "cuat": CUAT;
  /**  User Bucket */
  "cub": CUB;
  /**  User Bucket Item */
  "cubi": CUBI;
  /**  User Bucket Item Note */
  "cubin": CUBIN;
  /**  User Bucket Note */
  "cubn": CUBN;
  /**  User Bucket Type */
  "cubt": CUBT;
  /**  Portal Page Entry */
  "cusppe": CUSPPE;
  /**  Portal Page Entry Type */
  "cusppet": CUSPPET;
  /**  User Setting Type */
  "cust": CUST;
  /**  Videorecording Format */
  "cvrfm": CVRFM;
  /**  Matrix Weight Association */
  "cwa": CWA;
  /**  Workstation Setting Type */
  "cwst": CWST;
  /**  XML/XSLT Transform Definition */
  "cxt": CXT;
  /**  Z39.50 Attribute */
  "cza": CZA;
  /**  Z39.50 Index Field Map */
  "czifm": CZIFM;
  /**  Z39.50 Source */
  "czs": CZS;
  /**  Library Holdings Count with Deleted */
  "erccpo": ERCCPO;
  /**  Total Circulation Count, Including Legacy */
  "erfcc": ERFCC;
  /**  Bib IDs by Holding Add/Delete Time (OCLC batch update) */
  "ergbhu": ERGBHU;
  /**  */
  "ex": EX;
  /**  IDL Field Doc */
  "fdoc": FDOC;
  /**  Item Has Holds Count */
  "hasholdscount": HASHOLDSCOUNT;
  /**  i18n Core */
  "i18n": I18N;
  /**  Locale */
  "i18n_l": I18N_L;
  /**  i18n String */
  "i18ns": I18NS;
  /**  Inter-system Item Transit */
  "iatc": IATC;
  /**  Line Item */
  "jub": JUB;
  /**  Line Item State Labels */
  "jubstlbl": JUBSTLBL;
  /**  Library Group */
  "lasso": LASSO;
  /**  Library Group Map */
  "lmap": LMAP;
  /**  Account Adjustment */
  "maa": MAA;
  /**  Aged Billing Line Item */
  "mab": MAB;
  /**  Author Field Entry */
  "mafe": MAFE;
  /**  All Billing Line Items */
  "mallb": MALLB;
  /**  Payments: All */
  "mallp": MALLP;
  /**  Payments: Aged */
  "map": MAP;
  /**  Billing Line Item */
  "mb": MB;
  /**  Combined Browse Entry */
  "mbe": MBE;
  /**  Combined Browse Entry Definition Map */
  "mbedm": MBEDM;
  /**  Combined Browse Entry Simple Authority Heading Map */
  "mbeshm": MBESHM;
  /**  Payments: Brick-and-mortar */
  "mbp": MBP;
  /**  Billable Transaction */
  "mbt": MBT;
  /**  Billable Transaction Summary */
  "mbts": MBTS;
  /**  Billable Transaction Summary with Billing Location */
  "mbtslv": MBTSLV;
  /**  Credit Card Payment */
  "mccp": MCCP;
  /**  Compressed Display Entry */
  "mcde": MCDE;
  /**  Check Payment */
  "mckp": MCKP;
  /**  Cash Payment */
  "mcp": MCP;
  /**  House Credit Payment */
  "mcrp": MCRP;
  /**  Collections Tracker */
  "mct": MCT;
  /**  Debit Card Payment */
  "mdcp": MDCP;
  /**  Display Field Entry */
  "mde": MDE;
  /**  Payments: Desk */
  "mdp": MDP;
  /**  Combined Facet Entry */
  "mfae": MFAE;
  /**  MFA Factor */
  "mfaf": MFAF;
  /**  Flat Display Entry */
  "mfde": MFDE;
  /**  Combined Field Entry View */
  "mfe": MFE;
  /**  Forgive Payment */
  "mfp": MFP;
  /**  Flattened MARC Fields */
  "mfr": MFR;
  /**  Grocery Transaction */
  "mg": MG;
  /**  Goods Payment */
  "mgp": MGP;
  /**  Identifier Field Entry */
  "mife": MIFE;
  /**  Keyword Field Entry */
  "mkfe": MKFE;
  /**  Metarecord */
  "mmr": MMR;
  /**  Metarecord Source Map */
  "mmrsm": MMRSM;
  /**  Payments: Non-drawer Staff */
  "mndp": MNDP;
  /**  Open Billable Transaction Summary */
  "mobts": MOBTS;
  /**  Open User Circulation Summary */
  "moucs": MOUCS;
  /**  Open User Summary */
  "mous": MOUS;
  /**  Open User Summary for transactions with balances */
  "mowbus": MOWBUS;
  /**  Payments */
  "mp": MP;
  /**  SVF Record Attribute */
  "mra": MRA;
  /**  MVF Record Attribute Flat List */
  "mraf": MRAF;
  /**  MVF Record Attribute Vectors */
  "mravl": MRAVL;
  /**  Basic Record Descriptor */
  "mrd": MRD;
  /**  Record Sort Values */
  "mrs": MRS;
  /**  Series Field Entry */
  "msefe": MSEFE;
  /**  Subject Field Entry */
  "msfe": MSFE;
  /**  Title Field Entry */
  "mtfe": MTFE;
  /**  User Circulation Summary */
  "mucs": MUCS;
  /**  User Payment Summary */
  "mups": MUPS;
  /**  Uncontrolled Record Attribute Values */
  "murav": MURAV;
  /**  User Summary */
  "mus": MUS;
  /**  Virtual Record */
  "mvr": MVR;
  /**  Wide Display Entry */
  "mwde": MWDE;
  /**  Work Payment */
  "mwp": MWP;
  /**  Workstation Payment Summary */
  "mwps": MWPS;
  /**  OAI2 record list */
  "oaia": OAIA;
  /**  OAI2 record list */
  "oaib": OAIB;
  /**  Open Circulation Count */
  "ocirccount": OCIRCCOUNT;
  /**  Open Circulation List */
  "ocirclist": OCIRCLIST;
  /**  */
  "perm_ex": PERM_EX;
  /**  MFA Group Factor Map */
  "pgmfm": PGMFM;
  /**  Group Permission Map */
  "pgpm": PGPM;
  /**  Group Penalty Threshold */
  "pgpt": PGPT;
  /**  Permission Group */
  "pgt": PGT;
  /**  Permission Group Tree Display Entry */
  "pgtde": PGTDE;
  /**  Permission List */
  "ppl": PPL;
  /**  User Group Map */
  "pugm": PUGM;
  /**  User Object Permission Map */
  "puopm": PUOPM;
  /**  User Permission Map */
  "pupm": PUPM;
  /**  User Work Org Unit Map */
  "puwoum": PUWOUM;
  /**  Bind Variable */
  "qbv": QBV;
  /**  Case Branch */
  "qcb": QCB;
  /**  Datatype */
  "qdt": QDT;
  /**  Function Parameter Definition */
  "qfpd": QFPD;
  /**  From Relation */
  "qfr": QFR;
  /**  Function Signature */
  "qfs": QFS;
  /**  Order By Item */
  "qobi": QOBI;
  /**  Record Column */
  "qrc": QRC;
  /**  Query Sequence */
  "qseq": QSEQ;
  /**  Subfield */
  "qsf": QSF;
  /**  Select Item */
  "qsi": QSI;
  /**  Stored Query */
  "qsq": QSQ;
  /**  Expression */
  "qxp": QXP;
  /**  Dewey Classification */
  "racnd": RACND;
  /**  Statistical Popularity Badge */
  "rb": RB;
  /**  Classic Open Transaction Summary */
  "rccbs": RCCBS;
  /**  Classic Circulation View */
  "rccc": RCCC;
  /**  Circulation Type */
  "rcirct": RCIRCT;
  /**  Completed Report Runs */
  "rcr": RCR;
  /**  Item Statistics View */
  "rcsv": RCSV;
  /**  Hold/Item Ratio per Bib */
  "rhcrpb": RHCRPB;
  /**  Hold/Item Ratio per Bib and Home Library */
  "rhcrpbah": RHCRPBAH;
  /**  Hold/Item Ratio per Bib and Pickup Library */
  "rhcrpbap": RHCRPBAP;
  /**  Hold/Item Ratio per Bib and Pickup Library (and Descendants)  */
  "rhcrpbapd": RHCRPBAPD;
  /**  */
  "rhr": RHR;
  /**  Hold Request Record */
  "rhrr": RHRR;
  /**  Last Circulation or Creation Date */
  "rlc": RLC;
  /**  Last Item Delete Time */
  "rlcd": RLCD;
  /**  Open Circulation Balance by Checkout Library and Owning Library */
  "rmobbcol": RMOBBCOL;
  /**  Open Circulation Balance by User Home Library and Owning Library */
  "rmobbhol": RMOBBHOL;
  /**  Open Circulation Balance by Owning Library */
  "rmobbol": RMOBBOL;
  /**  Open Circulation Billing by Checkout Library and Owning Library */
  "rmocbbcol": RMOCBBCOL;
  /**  Open Circulation Billing by User Home Library and Owning Library */
  "rmocbbhol": RMOCBBHOL;
  /**  Open Circulation Billing by Owning Library */
  "rmocbbol": RMOCBBOL;
  /**  Fast Simple Record Extracts */
  "rmsr": RMSR;
  /**  Classic Item List */
  "rocit": ROCIT;
  /**  Overdue Circulation */
  "rodcirc": RODCIRC;
  /**  Output Folder */
  "rof": ROF;
  /**  Statistical Popularity Parameter */
  "rp": RP;
  /**  Report */
  "rr": RR;
  /**  Statistical Popularity Badge */
  "rrbs": RRBS;
  /**  Report Folder */
  "rrf": RRF;
  /**  Schedule */
  "rs": RS;
  /**  CAT1 Entry */
  "rsce1": RSCE1;
  /**  CAT2 Entry */
  "rsce2": RSCE2;
  /**  Simple Record */
  "rsr": RSR;
  /**  Simple Record Extracts */
  "rssr": RSSR;
  /**  Template */
  "rt": RT;
  /**  Template Folder */
  "rtf": RTF;
  /**  User Demographics */
  "rud": RUD;
  /**  Transaction Billing Totals */
  "rxbt": RXBT;
  /**  Transaction Paid Totals */
  "rxpt": RXPT;
  /**  All Issues' Summaries */
  "sasum": SASUM;
  /**  Basic Issue Summary */
  "sbsum": SBSUM;
  /**  Caption and Pattern */
  "scap": SCAP;
  /**  Distribution */
  "sdist": SDIST;
  /**  Distribution Note */
  "sdistn": SDISTN;
  /**  Item Note */
  "sin": SIN;
  /**  SIP Account */
  "sipacc": SIPACC;
  /**  SIP Filter */
  "sipfilter": SIPFILTER;
  /**  SIP Session */
  "sipses": SIPSES;
  /**  SIP Settings */
  "sipset": SIPSET;
  /**  SIP Settings Group */
  "sipsetg": SIPSETG;
  /**  SIP Screen Message */
  "sipsm": SIPSM;
  /**  Issuance */
  "siss": SISS;
  /**  Index Issue Summary */
  "sisum": SISUM;
  /**  Item */
  "sitem": SITEM;
  /**  Materialized Holding Code */
  "smhc": SMHC;
  /**  Prediction Pattern Template */
  "spt": SPT;
  /**  Relevance Adjustment */
  "sra": SRA;
  /**  Simple Reporter Billing and Payments Transaction Summary */
  "srbps": SRBPS;
  /**  Simple Reporter Circulation */
  "srcirc": SRCIRC;
  /**  Simple Reporter Collections */
  "srcp": SRCP;
  /**  Serial Record Entry */
  "sre": SRE;
  /**  Routing List User */
  "srlu": SRLU;
  /**  Simple Reporter Patrons */
  "srusr": SRUSR;
  /**  Simple Reporter Weeding */
  "srwd": SRWD;
  /**  Search Result */
  "ssr": SSR;
  /**  Supplemental Issue Summary */
  "sssum": SSSUM;
  /**  Stream */
  "sstr": SSTR;
  /**  Subscription */
  "ssub": SSUB;
  /**  Subscription Note */
  "ssubn": SSUBN;
  /**  Billing Address Stage */
  "stgba": STGBA;
  /**  Card Stage */
  "stgc": STGC;
  /**  Mailing Address Stage */
  "stgma": STGMA;
  /**  User Setting Stage */
  "stgs": STGS;
  /**  Statistical Category Stage */
  "stgsc": STGSC;
  /**  User Stage */
  "stgu": STGU;
  /**  Unit */
  "sunit": SUNIT;
  /**  Serial Virtual Record */
  "svr": SVR;
  /**  URL Verification Session */
  "uvs": UVS;
  /**  Combined URL Verify Sessions and Batches View */
  "uvsa": UVSA;
  /**  URL Verify Session Biblio Record Entry Map */
  "uvsbrem": UVSBREM;
  /**  URL Verification URL */
  "uvu": UVU;
  /**  URL Verification URL Selector */
  "uvus": UVUS;
  /**  URL Verification */
  "uvuv": UVUV;
  /**  URL Verification Attempt */
  "uvva": UVVA;
  /**  Queued Authority Record Match */
  "vam": VAM;
  /**  Import/Overlay Authority Queue */
  "vaq": VAQ;
  /**  Import/Overlay Background Import Job */
  "vbi": VBI;
  /**  Queued Bib Record Match */
  "vbm": VBM;
  /**  Import/Overlay Bib Queue */
  "vbq": VBQ;
  /**  Import/Overlay Fields for Removal */
  "vibtf": VIBTF;
  /**  Import/Overlay Field Groups for Removal */
  "vibtg": VIBTG;
  /**  Import/Overlay Error Definitions */
  "vie": VIE;
  /**  Import Item */
  "vii": VII;
  /**  Import Item Attribute Definition */
  "viiad": VIIAD;
  /**  Bib Import Merge Profile */
  "vmp": VMP;
  /**  Record Matching Definition Set */
  "vms": VMS;
  /**  Record Matching Definition */
  "vmsp": VMSP;
  /**  Record Quality Metric */
  "vmsq": VMSQ;
  /**  Queued Authority Record */
  "vqar": VQAR;
  /**  Queued Authority Record Attribute */
  "vqara": VQARA;
  /**  Queued Authority Record Attribute Definition */
  "vqarad": VQARAD;
  /**  Queued Bib Record */
  "vqbr": VQBR;
  /**  Queued Bib Record Attribute */
  "vqbra": VQBRA;
  /**  Queued Bib Record Attribute Definition */
  "vqbrad": VQBRAD;
  /**  Vandelay Session Tracker */
  "vst": VST;
  /**  Between Expression */
  "xbet": XBET;
  /**  Bind Variable Expression */
  "xbind": XBIND;
  /**  Boolean Expression */
  "xbool": XBOOL;
  /**  Case Expression */
  "xcase": XCASE;
  /**  Cast Expression */
  "xcast": XCAST;
  /**  Column Expression */
  "xcol": XCOL;
  /**  Exists Expression */
  "xex": XEX;
  /**  Function Expression */
  "xfunc": XFUNC;
  /**  In Expression */
  "xin": XIN;
  /**  IS NULL Expression */
  "xisnull": XISNULL;
  /**  Null Expression */
  "xnull": XNULL;
  /**  Number Expression */
  "xnum": XNUM;
  /**  Operator Expression */
  "xop": XOP;
  /**  Operator Expression */
  "xser": XSER;
  /**  String Expression */
  "xstr": XSTR;
  /**  Subquery Expression */
  "xsubq": XSUBQ;
}

/**
 * Valid IDL class names
 */
export type IdlClassName = keyof IdlClassMapping;
