"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooMessage = void 0;
const core_1 = require("@aries-framework/core");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const models_1 = require("../models");
class FooMessage extends core_1.AgentMessage {
    /**
     * Create new FooMessage instance.
     * @param options
     */
    constructor(options) {
        super();
        this.type = FooMessage.type.messageTypeUri;
        if (options) {
            this.id = options.id || this.generateId();
            this.nonce = options.nonce;
            this.questionText = options.questionText;
            this.questionDetail = options.questionDetail;
            this.signatureRequired = options.signatureRequired;
            this.validResponses = options.validResponses;
        }
    }
}
FooMessage.type = (0, core_1.parseMessageType)('https://didcomm.org/questionanswer/1.0/question');
__decorate([
    (0, core_1.IsValidMessageType)(FooMessage.type),
    __metadata("design:type", Object)
], FooMessage.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FooMessage.prototype, "nonce", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)({ name: 'signature_required' }),
    __metadata("design:type", Boolean)
], FooMessage.prototype, "signatureRequired", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'valid_responses' }),
    (0, class_transformer_1.Type)(() => models_1.ValidResponse),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsInstance)(models_1.ValidResponse, { each: true }),
    __metadata("design:type", Array)
], FooMessage.prototype, "validResponses", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'question_text' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FooMessage.prototype, "questionText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)({ name: 'question_detail' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FooMessage.prototype, "questionDetail", void 0);
exports.FooMessage = FooMessage;
//# sourceMappingURL=FooMessage.js.map