import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy Model Deployment',
    icon: '🚀',
    description: (
      <>
        Deploy popular AI models like Llama, Falcon, and Phi with simple YAML configurations.
        KAITO handles the complexity of model serving infrastructure.
      </>
    ),
  },
  {
    title: 'Auto GPU Provisioning',
    icon: '⚡',
    description: (
      <>
        Automatically provision the right GPU instances for your models across
        Azure, AWS, and other cloud providers with Karpenter integration.
      </>
    ),
  },
  {
    title: 'Kubernetes Native',
    icon: '☸️',
    description: (
      <>
        Built as a Kubernetes operator with CRDs for Workspace and RAGEngine.
        Integrates seamlessly with your existing Kubernetes workflows.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}