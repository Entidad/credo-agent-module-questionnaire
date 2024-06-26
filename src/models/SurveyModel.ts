import { Expose } from 'class-transformer'

export class SurveyModel {
    public constructor(options: SurveyModel) {
      if (options) {
        this.surveyId = options.surveyId
        this.jsonSchema = options.jsonSchema
        this.uiSchema = options.uiSchema
        this.initData = options.initData
        this.i18nData = options.i18nData
      }
    }
  
    @Expose({ name: 'survey_id' })
    public surveyId!: string

    @Expose({ name: 'json_schema' })
    public jsonSchema!: string

    @Expose({ name: 'ui_schema' })
    public uiSchema!: string

    @Expose({ name: 'init_data' })
    public initData?: string

    @Expose({ name: 'i18n_data' })
    public i18nData?: string
}
