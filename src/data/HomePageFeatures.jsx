import React from 'react'

const features = [
    {
        title: <p>AI model onboarding made easy</p>,
        imgUrl: 'img/kaito-inference-adapter.png',
        description: (
            <p>
                KAITO differs from mainstream model deployment options built on VM infrastructures by managing large model files using container images, providing preset configurations to avoid workload parameter adjustment based on GPU hardware, auto-provisioning GPU nodes based on model requirements, and hosting large OSS model images in a public container registry. Your organization may have specific model requirements for language, performance, versioning, etc. so KAITO helps you easily containerize and onboard a custom model by following a <a href='https://github.com/kaito-project/kaito/docs/custom-model-integration/custom-model-integration-guide.md'>simple 5-step guidance</a>.
            </p>
        ),
        reverse: false,
    },
    {
        title: <p>Infra-level model performance optimization</p>,
        imgUrl: 'img/kaito-fine-tuning.png',
        description: (
            <p>
                KAITO implements various techniques to optimize memory management for inferencing and tuning language models. Supported LLM serving engines are high throughput and memory-efficient to reduce response time for user requests at scale. In addition to low-rank adaptation (LoRA), KAITO offers parameter-efficient fine-tuning (PEFT) like quantized low-rank adaptation (QLoRA) for greater memory efficiency while supporting longer sequence (input) length. KAITO supplements these PEFT options with cache clearing and expandable segment by default to reduce GPU reserved memory size and lower the frequency of out-of-memory (OOM) errors. 
            </p>
        ),
        reverse: true,
    },
    {
        title: <p>Maintain data residency with cloud and edge deployment flexibility</p>,
        imgUrl: 'img/kaito-fine-tuning.png',
        description: (
            <p>
                KAITO integrates a Kubernetes controller that can select GPU nodes across clouds and on the edge to ensure that the AI deployments follow your data securiy standards. Whether your organization requires data residency within a single cloud region or within edge nodes across self-managed facilities and data centers, KAITO offers you the extensibility to "prefer" any GPU node (having the device software components pre-installed). 
            </p>
        ),
        reverse: false,
    },
    {
        title: <p>Built from open-source to plug into your AI pipelines</p>,
        imgUrl: 'img/kaito-fine-tuning.png',
        description: (
            <p>
                KAITO simplifies inferencing and fine-tuning deployments using the open-source workspace controller and Karpenter node provisioning components. As a Kubernetes operator, KAITO streamlines your Day 0/Day 1 ML operations while also plugging into your end-to-end AI pipeline that supports Day 2 operations like data ingestion, monitoring, alerting, storage, etc.
            </p>
        ),
        reverse: true,
    },
]
export default features
