import React from 'react'

const features = [
    {
        title: <p>AI model onboarding made easy</p>,
        imgUrl: 'img/kaito-easy-model-deployment.png',
        description: (
            <p>
                KAITO differs from mainstream model deployment options built on VM infrastructures by managing large model files using container images, providing preset configurations to avoid workload parameter adjustment based on GPU hardware, auto-provisioning GPU nodes based on model requirements, and hosting large OSS model images in a public container registry. Your organization may have specific model requirements for language, performance, versioning, etc. so KAITO helps you easily containerize and onboard a custom model by following a <a href='https://github.com/kaito-project/kaito/docs/custom-model-integration/custom-model-integration-guide.md'>simple 5-step guidance</a>.
            </p>
        ),
        reverse: false,
    },
    {
        title: <p>Automate fine-tuning and advanced inference</p>,
        imgUrl: 'img/kaito-inference-with-tuning-adapters.png',
        description: (
            <p>
                KAITO streamlines parameter-efficient fine-tuning (PEFT) methods on Kubernetes, like low-rank adaptation (LoRA) and quantized low-rank adaptation (QLoRA) for efficient memory utilization while supporting longer sequence (input) length. Simply provide the input data and tuning method to customize a supported model to your specific context, and KAITO will optimize the Kubernetes deployment with right-size infrastructure while lowering the frequency of out-of-memory (OOM) errors. KAITO also keeps your open-source AI pipelines up-to-date with advanced inference using fine-tuning adapters built from new data in your applications.
            </p>
        ),
        reverse: true,
    },
    {
        title: <p>Deploy models out-of-box with simple presets to bootstrap your AI workload</p>,
        imgUrl: 'img/kaito-ai-bootstrapping.png',
        description: (
            <p>
                KAITO simplifies the model and resource configuration process with just a few lines of YAML code! Start with a default model preset and deploy the workspace onto your Kubernetes cluster, while KAITO bootstraps the GPU node setup and inference service deployment behind the scenes. Using the KAITO workspace CRD, you can update to a different GPU type or prefer your own edge nodes to scale out the AI workload for your needs.
            </p>
        ),
        reverse: false,
    },
]
export default features
